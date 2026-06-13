import { useState } from "react";

export default function Form() {
   let [formData, setFormData] = useState({
      fullName: "",
      username: "",
      password: "",
   })

   let handleInputChange = (event) => {
      
      let fieldName = event.target.name;
      let newValue = event.target.value;
      
      
      setFormData((currData) => {
         currData[fieldName] = newValue
         return { ...currData };
      })
   }

   let handleFormSubmit = (event) => {
      console.log(formData);
      event.preventDefault();
      setFormData({
         fullName: "",
         username: "",
         password: "",
      })

   }

   return (
      <>
         <form onSubmit={handleFormSubmit} style={{ marginTop: "250px" }} >
            <label htmlFor="fullName" style={{ marginRight: "50px" }}>Full Name</label>
            <input
               placeholder="enter your full name"
               type="text"
               value={formData.fullName}
               id="fullName"
               name="fullName"
               onChange={handleInputChange} />
            <label htmlFor="username" style={{ marginRight: "50px" }}>Full Username</label>
            <input
               placeholder="enter your username"
               type="text"
               value={formData.username}
               id="username"
               name="username"
               onChange={handleInputChange} />
            <label htmlFor="password" style={{ marginRight: "50px" }}>Password</label>
            <input
               placeholder="enter password"
               type="password"
               value={formData.password}
               id="password"
               name="password"
               onChange={handleInputChange} />
            <button style={{ marginLeft: "50px" }}>Submit</button>
         </form>
      </>
   );
}