import React, { useState, useEffect } from "react";

function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1)
    }

    function subCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default UseEffectHook