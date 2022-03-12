import React, { useState } from  'react';
    
    
    const BetterWay = (props) => {
        const [form, setForm] = useState({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
        })
    
        const User = (event) => {
            console.log(event.target.name + " " + event.target.value);
            setForm({
                ...form,
                [event.target.name]: event.target.value
            });
        }
    
        const lengthValidator = (input, num) => {
            return input.length >= num
        }

        const passMatch = (password, confirmpassword) => {
            return password === confirmpassword
        }

        // const allValid = (inputs) => {
        //     return lengthValidator(inputs.firstname,2) && lengthValidator(inputs.lastname,2) && lengthValidator(inputs.email,5) && lengthValidator(inputs.password,8) && passMatch(inputs.password === inputs.confirmpassword);
        // }


    return(
        <form onSubmit={ User }>
            <div>
                <label>First Name </label> 
                <input name='firstname' type="text" onChange={User}/>
                {lengthValidator(form.firstname, 2) || form.firstname.length === 0 ? "" : <span className="alert-danger">First Name must be 2 characters or longer!</span>}
            </div>
            <div>
                <label>Last Name </label> 
                <input name='lastname' type="text" onChange={User}/>
                {lengthValidator(form.lastname, 2) || form.lastname.length === 0 ? "" : <span className="alert-danger">Last Name must be 2 characters or longer!</span>}
            </div>
            <div>
                <label>Email </label>
                <input name='email' type="text" onChange={User}/>
                {lengthValidator(form.email, 5) || form.email.length === 0 ? "" : <span className="alert-danger">Email must be 5 characters or longer!</span>}
            </div>
            <div>
                <label>Password </label>
                <input name='password' type="password" onChange={User}/>
                {lengthValidator(form.password, 8) || form.password.length === 0 ? "" : <span className="alert-danger">Password must be 8 characters or longer!</span>}
            </div>
            <div>
                <label>Confirm Password </label>
                <input name='confirmpassword' type="password" onChange={User}/>
                {passMatch(form.password, form.confirmpassword) || form.confirmpassword.length === 0 ? "" : <span className="alert-danger">Passwords do not match!</span>}
            </div>
            <p>First Name: {form.firstname}</p>
            <p>Last Name: {form.lastname}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Confirm Password: {form.confirmpassword}</p>
            {/* {
                allValid(form)
                    ? <input type="submit" className="btn btn-primary btn-lg"/>
                    : <input type="submit" className="btn btn-primary btn-lg" disabled/>
            } */}
        </form>
    );
};
    
export default BetterWay;