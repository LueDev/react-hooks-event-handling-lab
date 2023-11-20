// Code Keypad Component Here
import React from 'react'; 

function Keypad (){

function onInput(text){
    console.log("Entering password...")
}

    return (
        <div>
            <h1>PASSWORD APPLICATION</h1>
            <label htmlFor="pw">Enter the password: </label>
            <input id="pw" type="password" onChange={(event) => onInput(event.target.value)}></input>
        </div>
    )
}

export default Keypad;