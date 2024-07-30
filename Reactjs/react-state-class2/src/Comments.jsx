import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let [comments, setComments] = useState([{
        username: "@dk",
        remark: "good work",
        rating: 4
    }]);

   let addNewComment = (comment) =>{
       setComments((currComments) => [...currComments, comment]);
       console.log("added new comment");
   };

    return (
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx) =>(
               <div className="comment" key={idx}>
                  <span>{comment.remark}</span>
                  &nbsp;
                  <span>(Rating = {comment.rating})</span>
                  &nbsp;
                  <p>- {comment.username}</p>
               </div>
            ))}
        </div>
        <hr></hr>
        <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </>
    );
   
}