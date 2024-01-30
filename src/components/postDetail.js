import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import from 'react-router-dom' without '/cjs/react-router-dom.min'
import { firestore } from "../firebase";

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  // Using the hooks
  useEffect(() => {
    firestore
      .collection("posts")
      .doc(postId)
      .get()
      .then((snapshot) => {
        // Correct the spelling of 'snapshot' here
        console.log("Got the data");
        console.log("snapshot", snapshot.data()); // Correct the spelling of 'snapshot' here
        setPost(snapshot.data());
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      });
  }, [postId]); // Include 'postId' in the dependency array to re-run the effect when it changes

  return (
    <div className="Post-details">
      <h1>{post.title}</h1> {/* Correct the spelling of 'title' */}
      <p>{post.content}</p>{" "}
      {/* Use <p> for paragraphs instead of another <h1> */}
    </div>
  );
}

export default PostDetail;
