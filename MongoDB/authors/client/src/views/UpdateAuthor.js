import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const Update = (props) => {
    const { _id } = useParams();
    const [name, setName] = useState('');
    const [error, setError] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + _id)
            .then(res => {
                setName(res.data.name);
            })
    }, [_id]);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch("http://localhost:8000/api/authors/" + _id, {
            name
        })
        .then(res=>{
            console.log(res);
            history.push(`/`);
        })
        .catch(err=>{
            setError(err.response.data.err.errors);
        })
    }

    return(
        <div>
            <a href="/">Home</a>
            <h4>Edit this author</h4>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} className="form-control" onChange={(event) => { setName(event.target.value)}}/>
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <a href="/" className="btn btn-info btn-lg mt-3">Cancel</a> <input type="submit" className="btn btn-info btn-lg mt-3"/>
            </form>
        </div>
    )
}

export default Update;