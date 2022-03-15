import React, { useState } from "react";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const fetchInfo = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setPokemon(res.results)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{props.text}</h1>
            <button onClick={fetchInfo} className='btn btn-primary btn-lg'>Fetch Poke</button>
            <ul>
                {
                    pokemon.map((item, i) => {
                        return <li key={i}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemon;