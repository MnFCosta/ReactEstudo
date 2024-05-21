import React, { useState, createContext } from "react"
import UseContextB from "./UseContextB"

export const UserContext = createContext();

function UseContextA(){
    const [user, setUser] = useState('Maner')
    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{ `Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <UseContextB/>
            </UserContext.Provider>
        </div>
    )
}

export default UseContextA