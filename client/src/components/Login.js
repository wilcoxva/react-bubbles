import React, { useState } from 'react';
import axios from 'axios';

const LogIn = (props) => {

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:5000/api/login", info)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            props.history.push("/bubblePage");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Enter your username." value={info.username} onChange={handleChange}/>
                <input type="text" name="password" placeholder="Enter your password." value={info.password} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
        </div>
    )
};

export default LogIn;
