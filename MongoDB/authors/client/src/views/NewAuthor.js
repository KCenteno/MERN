import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewAuthor = (props) => {
    const [form, setForm] = useState({
        name: ""
    })

    const [error, setError] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/authors", form)
        .then(res=>{
            console.log(res);
            history.push("/");
        })
        .catch(err=>{
            console.log(err.response.data.err.errors);
            setError(err.response.data.err.errors);
        })
    }

    return(
        <div className="w-75 mx-auto my-4">
            <a href="/">Home</a>
            <h4>Add a new author:</h4>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.name && error.name.message}</span>
                </div>

                <a href="/" className="btn btn-info btn-lg mt-3">Cancel</a> <input type="submit" className="btn btn-info btn-lg mt-3"/>
            </form>
        </div>
    )
}

export default NewAuthor;