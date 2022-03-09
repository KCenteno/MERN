import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age : props.age
        }
    }

    updateState = () => {
            this.setState({
                age: this.state.age + 1})
    }

    render(){
        const{first_name, last_name, haircolor} = this.props;
        return(
            <div>
                <h1>{last_name}, {first_name}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick={this.updateState}>Birthday Button for {first_name} {last_name}</button>
            </div>
        )
    }
}


export default PersonCard;