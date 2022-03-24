import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Update = (props) => {
    const [form, setForm] = useState({
        name: "",
        flavor: "",
        whipped: false,
        numScoops: null
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

        axios.post("http://localhost:8000/api/products/create", form)
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
        <div>
            <form className="w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.title && error.title.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.price && error.price.message}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="number" name="description" className="form-control" onChange={onChangeHandler}/>
                    <span className="alert-danger">{error.description && error.description.message}</span>
                </div>
                <input type="submit" className="btn btn-info btn-lg mt-3"/>
            </form>
        </div>
    )
}

export default Update;