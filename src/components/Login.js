import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import "../css/Login.css"

const Login = (props) => {

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const navigate = useNavigate()
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        // Simple validation          // 👉 Add this for customizaiton
        if (!credentials.email || !credentials.password) {
            props.showAlert("Please fill in both email and password.", "warning");
            return;
        }
        const host = "http://localhost:5000"
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
            // body: JSON.stringify({email, password})
        })
        const json = await response.json()
        console.log(json)

        if(json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken)

            // Redirect korar jonno useHistory hook er sahajjo nebo...
            props.showAlert("Logged in Successfully.", "success")          // 👉 Add 'showAlert' #71...
            navigate("/")

        }
        else {
            // setError("Invalid credentials!");  // Display error if signup fails  
            props.showAlert("Invalid Details!", "danger")  // Display error if signup fails        // 👉 Add 'showAlert' #71...
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='login-container mt-3'>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-small-width"  >Login</button>
            </form>
        </div>
    )
}

export default Login
