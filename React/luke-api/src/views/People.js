import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const People = (props) => {
    const {detail} = useParams();
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [skinColor, setSkinColor] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("false");

    useEffect(()=>{
        console.log("page loaded, useEffect running");

        axios.get("https://swapi.dev/api/people/"+ detail)
            .then(res => {
                console.log(res);
                setError(false);
                setName(res.data.name);
                setHeight(res.data.height);
                setMass(res.data.mass);
                setHairColor(res.data.hair_color);
                setSkinColor(res.data.skin_color);
                setGender(res.data.gender);
            })
            .catch(err=> {
                console.log(err)
                setError(true)
            })
            
    },[detail])

    if(error){
        return(
            <div>
                <h1>These are not the droids you are looking for</h1>
                <img src="https://i1.wp.com/needlessessentialsonline.com/wp-content/uploads/2015/02/Star-Wars-Episode-IV-Obi-Wan-Kenobi-2.png" alt="A picture of Obi-Wan Kenobi" />
            </div>
        )
    }else{
        return(
            <div>
            <h1>** {name} **</h1><br />
            <h1>Gender: {gender}</h1><br />
            <h2>Height: {height}</h2><br />
            <h2>Mass: {mass}</h2><br />
            <h2>Hair Color: {hairColor}</h2><br />
            <h2>Skin Color: {skinColor}</h2>
        </div>
    )
}
}
export default People;