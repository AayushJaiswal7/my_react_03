import { useState } from "react";

export default function Form() {
   let [formData,setFromData]=useState({
      fullName:"",
      username:"",
   })
   let handleInputChange=(event)=>{
      let fieldName=event.target.name;
      let newValue=event.target.value;
      setFromData((currData)=>{
         currData[fieldName]=newValue
         return{...currData};
      })    
   }
   let handleFormSubmit = (event)=>{
      event.preventDefault();
      setFromData({
         fullName:"",
         username:"",
      })

   }
      
   return (
      <>
         <form onSubmit={handleFormSubmit} style={{ marginTop: "250px" }} >
            <label htmlFor="fullName" style={{marginRight:"50px"}}>Full Name</label>
            <input
               placeholder="enter your full name" 
               type="text"
               value={formData.fullName}
               id="fullName"
               name="fullName"
               onChange={handleInputChange} />
            <label htmlFor="username" style={{marginRight:"50px"}}>Full Username</label>
            <input
               placeholder="enter your username" 
               type="text"
               value={formData.username}
               id="username"
               name="username"
               onChange={handleInputChange} />
            <button style={{marginLeft:"50px"}}>Submit</button>
         </form>
      </>
   );
}