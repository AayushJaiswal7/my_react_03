import { useState } from "react"

export default function CommentsForm() {
   let [formData,setFormData]=useState({
      username: "",
      remarks: "",
      rating: 1,
   });
   let handleInputChange=(event)=>{
      setFormData((currData)=>{
         return {...currData,[event.target.name]: event.target.value}}
      )
      }
   
   let handleFormSubmit=(event)=>{
      console.log(formData);
      event.preventDefault()
      setFormData({
      username: "",
      remarks: "",
      rating: 1,

      })

      
   }
   return (
      <div>
         <h4>Give a comment!</h4>
         <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username: </label>
            <input placeholder="username" type="text" id="username" name="username" value={formData.username } onChange={handleInputChange} />
            <br /><br /><br /><br />

            <label htmlFor="remarks">Remarks: </label>
            <textarea placeholder="add few remarks" id="remarks" name="remarks" value={formData.remarks}
            onChange={handleInputChange}></textarea>
            <br /><br /><br /><br />

            <label htmlFor="rating">Rating: </label>
            <input placeholder="rating" type="number" id="rating" name="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
            <br /><br /> <br /><br />
             
            <button style={
            { backgroundColor:" #0070f3",
            color: "white",
            padding:" 10px 20px",
            fontSize:" 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            
            }
            }>Add Comment</button>

      </form>
      </div >
   )

}