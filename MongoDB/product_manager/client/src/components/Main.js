import React from "react";

const Main = (props) => {

    return(
        <div>
            <h1>Product Manager</h1>
            <form className="w-75 mx-auto">
            {/* onSubmit={onSubmitHandler} */}
            <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" />
                    {/* onChange={onChangeHandler}  */}
                    {/* <span className="alert-danger">{error.title && error.title.message}</span> */}
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" className="form-control" />
                    {/* onChange={onChangeHandler}  */}
                    {/* <span className="alert-danger">{error.title && error.company.message}</span> */}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" className="form-control" />
                    {/* onChange={onChangeHandler}  */}
                    {/* <span className="alert-danger">{error.title && error.company.message}</span> */}
                </div>

                <button className="btn btn-success btn-lg d-block mx-auto my-3">Create</button>
            </form>
        </div>
    )
}

export default Main;