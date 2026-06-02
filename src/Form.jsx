import { useState } from "react";

export default function Form() {
   let [name, setName] = useState("");
   let [username,setUsername]=useState("");
   let [formData,setFromData]=useState({
      fullName:"",
      username:"",
   })
   let handleNameChange =(event) =>{
      setName(event.target.value)
   };
   return (
      <>
         <form style={{ marginTop: "250px" }} >
            <label htmlFor="fullName" style={{marginRight:"50px"}}>Full Name</label>
            <input
               placeholder="enter your full name" 
               type="text"
               value={name}
               id="fullName"
               onChange={(e)=>setName(e.target.value)} />
            <label htmlFor="username" style={{marginRight:"50px"}}>Full Username</label>
            <input
               placeholder="enter your username" 
               type="text"
               value={username}
               id="username"
               onChange={(e)=>setUsername(e.target.value)} />
           
                
            <button style={{marginLeft:"50px"}}>Submit</button>
         </form>
      </>
   );
}