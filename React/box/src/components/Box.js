import React from 'react';

const Box = (props) => {
    return(
        <div className="box">
            <h2 style={{width:70,height:70, backgroundColor: props.name }}></h2>
        </div>
    )
}

export default Box;