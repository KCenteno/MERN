import React, { useState } from  'react';
    
    
    const UserForm = (props) => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmpassword, setConfirmPassword] = useState("");
        const [firstnamerror, setFirstnameError] = useState("");
        const [lastnameerror, setLastnameError] = useState("");
        const [emailerror, setEmailError] = useState("");
        const [passworderror, setPasswordError] = useState("");
        const [confirmpassworderror, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    const validatef = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 1) {
            setFirstnameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 2 characters or longer!");
        }
        else{
            setFirstnameError("")
        }
    }
    const validatel = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastnameError("Last Name must be 2 characters or longer!");
        }
        else{
            setLastnameError("")
        }
    }
    const validatee = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
        else{
            setEmailError("")
        }
    }
    const validatep = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
        else{
            setPasswordError("")
        }
    }
    const validatecp = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setConfirmPasswordError("Passwords dont match!");
        }
        else{
            setConfirmPasswordError("")
        }
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name </label> 
                <input type="text" onChange={ validatef }  />
                {firstnamerror && <p>{firstnamerror}</p>}
            </div>
            <div>
                <label>Last Name </label> 
                <input type="text" onChange={ validatel } />
                {lastnameerror && <p>{lastnameerror}</p>}
            </div>
            <div>
                <label>Email </label>
                <input type="text" onChange={ validatee } />
                {emailerror && <p>{emailerror}</p>}
            </div>
            <div>
                <label>Password </label>
                <input type="password" onChange={ validatep } />
                {passworderror && <p>{passworderror}</p>}
            </div>
            <div>
                <label>Confirm Password </label>
                <input type="password" onChange={ validatecp } />
                {confirmpassworderror && <p>{confirmpassworderror}</p>}
            </div>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </form>
    );
};
    
export default UserForm;
