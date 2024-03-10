//Author: Ramazantk3
import "./App.css"
import { useState } from "react";
import Button from "./Button.jsx"

    
function App() {
  let [operation, setOperation] = useState("");
  let [previousNumber, setPreviousNumber] = useState("");
  let [currentNumber, setCurrentNumber] = useState("0");

  const handleDisplay = (newCurrentNumber) => {
    setCurrentNumber(newCurrentNumber);
  }

  const handleDisplayPrev = (newPreviousNumber, op, ans) =>{
    setPreviousNumber(newPreviousNumber);
    setOperation(op);
    setCurrentNumber(ans);
  }

  return (
    <div className="calculator-grid">
     <div className="outputScreen">
      <div className="previousNumber">{previousNumber} {operation} </div>
      <div className="currentNumber">{currentNumber}</div>
     </div>
     <Button operator = "clear" handleDisplayPrev = {handleDisplayPrev}/>
     <button>DEL</button>
     <Button operator = "div" handleDisplayPrev = {handleDisplayPrev}/>
     <Button number = "1" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="2" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="3" operator = "" handleDisplay = {handleDisplay}/>
     <Button operator = "mul" handleDisplayPrev = {handleDisplayPrev} />
     <Button number ="4" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="5" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="6" operator = "" handleDisplay = {handleDisplay}/>
     <Button operator = "add" handleDisplayPrev = {handleDisplayPrev}/>
     <Button number ="7" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="8" operator = "" handleDisplay = {handleDisplay}/>
     <Button number ="9" operator = "" handleDisplay = {handleDisplay}/>
     <Button operator = "sub" handleDisplayPrev = {handleDisplayPrev}/>
     <Button operator = ""/>
     <Button number ="0" operator = "" handleDisplay = {handleDisplay}/>
     <Button operator = "ans" handleDisplayPrev = {handleDisplayPrev}/>
    </div>
  )
}


export default App
