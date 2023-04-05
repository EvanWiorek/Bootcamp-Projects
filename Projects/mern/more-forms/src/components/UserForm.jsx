import React, { useState } from 'react';
import './style.css'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name should not be blank.")
        }
        else if (e.target.value.length < 2) {
            setFirstNameError("Name should be at least 2 characters.")
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name should not be blank.")
        }
        else if (e.target.value.length < 2) {
            setLastNameError("Last Name should be at least 2 characters.")
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email should not be blank.")
        }
        else if (e.target.value.length < 2) {
            setEmailError("Email should be at least 2 characters.")
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        let passwordValue = setPassword(e.target.value);
        console.log(passwordValue)
        if(e.target.value.length < 1) {
            setPasswordError("Password should not be blank.")
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password should be at least 8 characters.")
        }
        else {
            setPasswordError("");
        }
        // return passwordValue
    }

    const handleConPassword = (e) => {
        setConPassword(e.target.value);
        if(e.target.value !== password) {
            setConPasswordError("Passwords do not match.")
        }
        else {
            setConPasswordError("");
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log("Welcome", newUser)
    };

    return (
        <form onSubmit={createUser} className='col-3 m-auto text-light form-body'>
            <div className='form-group'>
                <label>First Name:</label>
                <input type="text" class="form-control" onChange={ handleFirstName } />
                {
                    firstNameError ?
                        <p style={{ color: 'tomato' }}>{firstNameError}</p> :
                        ''
                }
            </div>
            <div className='form-group mt-3'>
                <label>Last Name:</label>
                <input type="text" class="form-control" onChange={ handleLastName } />
                {
                    lastNameError ?
                        <p style={{ color: 'tomato' }}>{lastNameError}</p> :
                        ''
                }
            </div>
            <div className='form-group mt-3'>
                <label>Email:</label>
                <input type="text" class="form-control" onChange={ handleEmail } />
                {
                    emailError ?
                        <p style={{ color: 'tomato' }}>{emailError}</p> :
                        ''
                }
            </div>
            <div className='form-group mt-3'>
                <label>Password:</label>
                <input type="password" class="form-control" onChange={ handlePassword } />
                {
                    passwordError ?
                        <p style={{ color: 'tomato' }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div className='form-group mt-3'>
                <label>Confirm Password:</label>
                <input type="password" class="form-control" onChange={ handleConPassword } />
                {
                    conPasswordError ?
                        <p style={{ color: 'tomato' }}>{conPasswordError}</p> :
                        ''
                }
            </div>
            <input type="submit" value="Create User" className='btn btn-primary mt-3' />
        </form>
    )
}

export default UserForm;