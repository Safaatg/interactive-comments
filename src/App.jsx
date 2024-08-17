import { useState } from "react";
import "./App.css";
import Post from "./Components/Post/Post";
import image1 from "./assets/images/avater/image-amyrobson.png";
import juliusomo from "./assets/images/avater/image-juliusomo.png";
import image3 from "./assets/images/avater/image-ramsesmiron.png";
import maxblagun from "./assets/images/avater/image-maxblagun.png";
import NewPost from "./Components/NewPost/NewPost";

function App() {
  const [ArrayOfObject, setArrayOfObject] = useState([
    {
      id: 1,
      likes: 0,
      img: image1,
      name: "amyrobson",
      createdAt: "1 month ago",
      comment:[],
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    },

    {
      id: 2,
      likes: 0,
      img: maxblagun,
      name: "maxblagun",
      createdAt: "2 weeks ago",
      comment:[],
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    },

    {
      id: 3,
      likes: 0,
      img: image3,
      name: "maxblagun",
      createdAt: "1 week ago",
      comment:[],
      content:
        "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    },

    {
      id: 4,
      likes: 0,
      img: juliusomo,
      name: "juliusomo",
      createdAt: "2 days ago",
      comment:[],
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    },
  ]);

  function AddnewPostInsideArray(postContent) {
    console.log(postContent);
    let newPostObject = {
      id: ArrayOfObject.length + 1,
      likes: 0,
      img: juliusomo,
      name: "juliusomo",
      createdAt: "2 days ago",
      comment:[],
      content: postContent,
    };
    let newArrayOfObject = [...ArrayOfObject, newPostObject];
    setArrayOfObject(newArrayOfObject);
  }

  function deleteItem(PostId) {
    const newObjecAfterDelete = ArrayOfObject.filter((item) => {
      return item.id != PostId;
    });

    setArrayOfObject(newObjecAfterDelete);
  }
  function AddNewComment(commentContact,id){
    console.log(commentContact,id)
   let newArrayAfterUpdate= ArrayOfObject.map((currentPost)=>{
      if (currentPost.id == id){
        currentPost.comment.push(commentContact)
      }
      return currentPost;
    })
    setArrayOfObject

  }
  return (
    <>
      <div id="postsWrapper">
        {ArrayOfObject.map((item) => {
          return (
            <Post
            uniqueID={item.id}
            key={item.id}
            likes={item.likes}
            content={item.content}
            img={item.img}
            name={item.name}
            createdAt={item.createdAt}
            deleteItem={deleteItem}
            AddNewComment={(commentContact) => AddNewComment(commentContact, item.id)}
            comment={item.comment}
          ></Post>
          );
        })}
      </div>
      <NewPost AddnewPostInsideArray={AddnewPostInsideArray}></NewPost>
    </>
  );
}

export default App;
