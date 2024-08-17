import React, { useState } from "react";
import "../../Components/Post/Post.css";
import plus from "../../assets/images/icon-plus.svg";
import minuss from "../../assets/images/icon-minus.svg";
import delet from "../../assets/images/icon-delete.svg";
import AddNewComment from "../AddNewComment/AddNewComment";
import CommentWrapper from "../CommentWrapper/CommentWrapper";

function Post(props) {
  const [count, setCount] = useState(props.likes);
  const [showReplyDiv, setShowReplyDiv] = useState(false);

  const handleDelete = (event) => {
    props.deleteItem(event.target.getAttribute("uniqueID"));
  };

  const handleReplyBtn = () => {
    let finalResult = !showReplyDiv;
    setShowReplyDiv(finalResult);
  };

  function HideReplySection(){
    setShowReplyDiv(false)
  }

  return (
    <div>
      <div className="container">
        <div className="post">
          <div id="counterWrapper">
            <button className="btn-counter" onClick={() => setCount(count > 0 ? count - 1 : 0)}>
              <img src={minuss} alt="Decrease" />
            </button>
            <span>{count}</span>
            <button className="btn-counter" onClick={() => setCount(count + 1)}>
              <img src={plus} alt="Increase" />
            </button>
          </div>

          <div className="box">
            <div className="box-container">
              <div className="profile">
                <div className="profileWrapper">
                  <img src={props.img} alt="Profile" />
                  <h2>{props.name}</h2>
                  <h5>{props.createdAt}</h5>
                </div>

                <div className="delete-reply">
                  {props.name === "juliusomo" && (
                    <div className="btn">
                      <img src={delet} alt="Delete" />
                      <button
                        uniqueID={props.uniqueID}
                        id="DeleteBtns"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  )}

                  <button className="Reply" onClick={handleReplyBtn}>Reply</button>
                </div>
              </div>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
      <CommentWrapper Allcomment={props.comment}></CommentWrapper>
      {showReplyDiv === true && <AddNewComment
      HideReplySection = {HideReplySection}
       AddNewComment={props.AddNewComment} uniqueID={props.uniqueID}></AddNewComment>}
    </div>
  );
}

export default Post;