import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm"
export default function Comment(){
   let [comment,setComment]=useState([
     { username:"@ayush",
      remarks:"great job!",
      rating: 4
     }
   ])
   let addNewComment=(comment)=>{

   }
   return(
      <div>
         <h3>All comments</h3>
         <div className="comment">
         <span>{comment[0].remarks}</span>
         &nbsp;
         <span>(rating={comment[0].rating})</span>
         <br />
         <span>-{comment[0].username}</span>
         </div>
         <hr ></hr>
         <CommentsForm addNewComment={addNewComment}/>
      </div>
   )
}