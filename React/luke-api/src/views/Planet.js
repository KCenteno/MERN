import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Planet = (props) => {
    const {detail} = useParams();
    const [name, setName] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [surfaceWater, setSurfaceWater] = useState("");
    const [population, setPopulation] = useState("");
    const [gravity, setGravity] = useState("");
    const [error, setError] = useState("false");

    useEffect(()=>{
        console.log("page loaded, useEffect running");

        axios.get("https://swapi.dev/api/planets/" + detail)
            .then(res => {
                console.log(res);
                setError(false);
                setName(res.data.name);
                setClimate(res.data.climate);
                setTerrain(res.data.terrain);
                setSurfaceWater(res.data.surface_water);
                setPopulation(res.data.population);
                setGravity(res.data.gravity);
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
            <h2>Climate: {climate}</h2><br />
            <h2>Gravity: {gravity}</h2><br />
            <h2>Terrain: {terrain}</h2><br />
            <h2>Sureface Water: {surfaceWater}</h2><br />
            <h2>Population: {population}</h2>
        </div>
    )
}
}

export default Planet;