import React, {useState} from "react";

function StateObjects(){
    const [car, setCar] = useState({year: "2015", make: "Mitsubishi", model: "Lancer Evo X"}); 

    function handleYearChange(e){
        setCar(c => ({...c, year: e.target.value}))

    }
    function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}))
    }
    function handleModelChange(e){
        setCar(c => ({...c, model: e.target.value}))
    }

    return(
        <div>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <p>Your car is a: {car.year} {car.make} {car.model}</p>
        </div>
        
    ); 
}

export default StateObjects