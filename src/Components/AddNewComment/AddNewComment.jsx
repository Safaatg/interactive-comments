import React, { useState } from 'react';
import "../AddNewComment/AddNewComment.css";
import juliusomo from "../../assets/images/avater/image-juliusomo.png";

function AddNewComment(props) {
    const [reply, setReply] = useState("");

    function HandleOnchange(event) {
        setReply(event.target.value);
    }

    function HandleNewReply(event) {
        const id = event.target.getAttribute("uniqueID");
        props.AddNewComment(reply); // تم تغيير هنا من commentContact إلى reply
        props.HideReplySection();
        setReply("");
    }

    return (
        <div className="container-reply">
            <div className="reply-comment">
                <img src={juliusomo} alt="Avatar" />
                <textarea value={reply} rows={4} type="text" onChange={HandleOnchange} />
                <button onClick={HandleNewReply} uniqueID={props.uniqueID}>Reply</button>
            </div>
        </div>
    );
}

export default AddNewComment;