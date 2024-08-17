import "../CommentWrapper/CommentWrapper.css";
import juliusomo from "../../assets/images/avater/image-juliusomo.png";
function CommentWrapper(props) {
  return (
    <div className="container">
      {props.Allcomment.map((comment) => {
        return (
          <div className="comment-container">
            <div className="comment-pro">
            <img src={juliusomo} />
              <h3>juliusomo</h3>
            </div>
            <p>{comment}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CommentWrapper;
