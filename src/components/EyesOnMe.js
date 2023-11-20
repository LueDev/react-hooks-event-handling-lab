// Code EyesOnMe Component Here
import React from 'react'
function EyesOnMe(props){

function onBlur(){console.log("Hey! Eyes on me!")}
function onFocus(){console.log("Good!")}

    return(
        <button 
        onBlur={onBlur}
        onFocus={onFocus}
        >Eyes on me
        </button>
    )
}

export default EyesOnMe;