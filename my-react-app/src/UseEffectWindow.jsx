import React, {useState, useEffect} from 'react'

function UseEffectWindow(){
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
            window.addEventListener('resize', handleResize);
            console.log("IT RAN")

            return () => {
                window.removeEventListener('resize', handleResize)
                console.log("Event Listener Removed")
            }
    }, []);

    useEffect(() => {
        document.title = `${width} x ${height}`
    }, [width,height]);


    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Window: {width} x {height}</p>
        </>
    )
}

export default UseEffectWindow