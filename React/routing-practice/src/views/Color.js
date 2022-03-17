import React from "react";
import { useParams } from "react-router-dom";

const Color = (props) => {
    const {thing, color, backgroundColor} = useParams();
        return(
            <div>
                {
                    isNaN(thing)? <h1 style={{color: color, backgroundColor: backgroundColor}}>The word is: {thing}</h1>
                                : <h1 style={{color: color, backgroundColor: backgroundColor}}>The number is: {thing}</h1>
                }
            </div>
    )
}

export default Color;