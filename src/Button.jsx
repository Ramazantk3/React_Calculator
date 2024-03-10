//Author: Ramazantk3
let currentNumber = "";
let op = "";
let previousNumber = "";
let ans = "";

function Button({number, operator, handleDisplay, handleDisplayPrev}){
    let number2 = Number(number)+0;

    const handleClick = () => {
        currentNumber += String(number2);
        handleDisplay(currentNumber);
    }

    const handleOperation = (operator) => {
        if(operator ==="div") op = "÷"
        else if(operator ==="mul") op = "x"
        else if(operator ==="add") op = "+"
        else if(operator ==="sub") op = "−"
        handleDisplayPrev(currentNumber, op , 0);
        previousNumber = currentNumber;
        currentNumber ="";
        console.log(previousNumber);
    }

    const handleAns = () => {
        if(op ==="÷") ans = String(Number(previousNumber) * (1/ Number(currentNumber)));
        else if(op ==="x") ans = String(Number(previousNumber) *  Number(currentNumber));
        else if(op ==="+") ans = String(Number(previousNumber) +  Number(currentNumber));
        else if(op ==="−") ans = String(Number(previousNumber) -  Number(currentNumber));
        else ans = currentNumber;
        previousNumber = ""
        currentNumber = ans;
        console.log(ans);
        handleDisplayPrev("","", ans);
    }
    
    const handleClear = () =>{
        handleDisplayPrev("","", 0);
        previousNumber = ""
        currentNumber = "";
    }


    if(operator.length === 0 && number!==null){
    return(
        <button onClick = {handleClick}>{number}</button>
    )
    }
    else if (operator ==="div") return(<button onClick = {()=>handleOperation(operator)}>÷</button>)
    else if (operator ==="mul") return(<button onClick = {()=>handleOperation(operator)}>x</button>)
    else if (operator ==="add") return(<button onClick = {()=>handleOperation(operator)}>+</button>)
    else if (operator ==="sub") return(<button onClick = {()=>handleOperation(operator)}>−</button>)

    else if(operator==="ans") return(<button className="doubleSize" onClick = {handleAns} >=</button>)
    else if(operator==="clear") return(<button className="doubleSize red" onClick = {handleClear}>C</button>)
}

export default Button