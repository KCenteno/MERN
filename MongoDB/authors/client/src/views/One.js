import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";

const One = (props) => {
    const [authors, setAuthors] = useState({});
    const { _id } = useParams();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/" + _id)
        .then(res=>{
            console.log(res)
            setAuthors(res.data);
        })
        .catch(err=>{
            console.log(err.response)
        })
}, [_id])

    return(
        <div className='w-75 mx-auto p-5'>
            <h1>{authors.name}</h1>
            <Link to={`/`} className="btn btn-info btn-lg mt-3">Back</Link>
        </div>
    )
}

export default One;