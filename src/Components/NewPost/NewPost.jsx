import { useState } from "react";
import "../NewPost/NewPost.css";
import juliusomo from "../../assets/images/avater/image-juliusomo.png";
function NewPost(props) {
  const [inputValue, setInputValue] = useState("");
  function handleSendPost() {
    props.AddnewPostInsideArray(inputValue);
    setInputValue("");
  }
  function handleOnchange(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className="container-comment">
      <div className="comment">
        <img src={juliusomo} />
        <textarea
          rows={4}
          type="text"
          placeholder="Add a comment..."
          value={inputValue}
          onChange={handleOnchange}
        ></textarea>
        <button onClick={handleSendPost}>send</button>
      </div>
    </div>
  );
}
export default NewPost;
