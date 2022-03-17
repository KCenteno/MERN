import React from "react";
import { useParams } from "react-router-dom";


const Thing = (props) => {
    const {thing} = useParams();

    return(
        <div>
            {isNaN(thing)? <h1>The word is: {thing}</h1>
                        : <h1>The number is: {thing}</h1>
            }
        </div>
    )
}

export default Thing;