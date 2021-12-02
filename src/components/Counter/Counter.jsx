import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
const [counter, setCounter] = useState(0);

const handleIncrement = () => {
   
        setCounter(counter + 1)
    
}

const handleDecrement = () => {
    if (counter === 0) {
        setCounter(0)
    } else {
        setCounter(counter - 1)
    }

}


    return (
        <div className="counter">
            <h3 className="counter__title">Counter</h3>
            <h3 className="counter__score">{counter}</h3>
            <div className="button-container">
                <button onClick={handleDecrement}className="button">-</button>
                <button onClick={handleIncrement}className="button">+</button>
            </div>

        </div>
    )
}


export default Counter