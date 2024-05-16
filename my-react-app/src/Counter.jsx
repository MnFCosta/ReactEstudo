import React, { useState } from "react"


function Counter() {
    const [num, changeNum] = useState(0);

    const minusNum = () => {
        changeNum(num - 1)
    };

    const resetNum = () => {
        changeNum(0)
    };

    const plusNum = () => {
        changeNum(num + 1)
    };

    return(
        <div>
            <p>{num}</p>
            <button onClick={minusNum}>-</button>
            <button onClick={resetNum}>Reset</button>
            <button onClick={plusNum}>+</button>
        </div>
    );
}   

export default Counter