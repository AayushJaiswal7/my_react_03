import { useState } from "react"
export default function LudoBoard() {
   let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

   let handleBlue=()=>{
      setMoves((prevMoves)=>{
         return {...prevMoves,blue:prevMoves.blue+1}
      })
   }
    let handleGreen=()=>{
      setMoves((prevMoves)=>{
         return {...prevMoves,green:prevMoves.green+1}
      })
   }
    let handleRed=()=>{
      setMoves((prevMoves)=>{
         return {...prevMoves,red:prevMoves.red+1}
      })
   }
    let handleyellow=()=>{
      setMoves((prevMoves)=>{
         return {...prevMoves,yellow:prevMoves.yellow+1}
      })
   }
   return (
      <div>
         <p style={{ alignContent: "center", marginTop: "200px" }}>Game begins</p>
         <div className="board">
            <p>Blue moves={moves.blue}</p>
            <button onClick={handleBlue} style={{backgroundColor:"blue",color:"black"}}>+1</button>
            <p>Yellow moves={moves.yellow}</p>
            <button onClick={handleyellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            <p>Green moves={moves.green}</p>
            <button onClick={handleGreen} style={{backgroundColor:"green",color:"black"}}>+1</button>
            <p>Red moves={moves.red}</p>
            <button onClick={handleRed} style={{backgroundColor:"red",color:"black"}}>+1</button>
         </div>
      </div>
   )
}