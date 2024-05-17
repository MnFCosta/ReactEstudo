import React, { useState } from "react"


function Counter() {
    const [num, changeNum] = useState(0);

    const minusNum = () => {
        //decrementing with and updater function
        changeNum(n => n - 1)
    };

    const resetNum = () => {
        changeNum(0)
    };

    const plusNum = () => {
        //incrementing normally
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