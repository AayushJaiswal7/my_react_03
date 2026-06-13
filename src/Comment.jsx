import { useState } from "react"
import "./Comment.css"
export default function Comment(){
   let [comment,setComment]=useState([
     { username:"@ayush",
      remarks:"great job!",
      rating: 4
     }


   ])
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
      </div>
   )
}