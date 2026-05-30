import { useState } from "react";

export default function Form(){
   let [name,setName]=useState("");
   return(
      <>
      <form style={{marginTop:"250px"}} >
         <input placeholder="enter your full name" type="text"/>
         <button>Submit</button>
      </form>
      </>
   );
}