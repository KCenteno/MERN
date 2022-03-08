import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        }

    render(){
        const{first_name, last_name, age, haircolor} = this.props;
        return(
            <div>
                <h1>{last_name}, {first_name}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {haircolor}</p>
            </div>
        )
    }
}


export default PersonCard;