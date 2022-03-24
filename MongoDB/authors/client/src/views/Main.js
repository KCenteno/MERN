import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const { _id } = useParams();


    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(res=>{
                console.log(res);
                setAuthors(res.data);
            })
            .catch(err=>
                console.log(err.response))
    },[])

    const onDeleteHandler = (_id, arrIndex) =>{
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
            .then(res=>{
                console.log(res);
                const copyState = [...authors];
                copyState.splice(arrIndex, 1)
                setAuthors(copyState);
            })
            .catch(err=>
                console.log(err.response))
    }

    return(
        <div className='w-75 mx-auto'>
            <Link to="/Add" className='btn btn-success'>Add an author</Link>
            <h4>We have quotes by:</h4>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Author Names</th>
                        <th>Actions avaliable</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((item,i)=>{
                                return <tr key={i}>
                                    <td><Link to={`/${item._id}`}>{item.name}</Link></td>
                                    <td><Link to={`/authors/${item._id}/update`} className='btn btn-primary btn-sm'>Edit</Link> | <button onClick={()=>onDeleteHandler(item._id, i)} className='btn btn-danger btn-sm'>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default Main;