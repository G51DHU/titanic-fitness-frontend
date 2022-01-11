import logo from '@a/logo-cropped.svg'
import "@s/login.css"
import { useState } from 'react'

import {Link, useNavigate} from "react-router-dom"


export default function LoginPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValidUser, setIsValidUser] = useState(false)
    const navigate = useNavigate()

    function LogInUser(e){
        e.preventDefault();
        const credentials = {
            "username": username,
            "password": password
        }
        fetch("http://localhost:8000/account/auth/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(response => response.json())
        .then(data => {if (data === "true"){
            console.log(data); 
            setIsValidUser(true); 
            navigate("/user")
        }})
    }
    
        return(
            <div className='login-page-background'>
                <div className='login-component'>
                    <form className='login-form' onSubmit={(e) => LogInUser(e)}>
                        <h1>Sign In</h1>
                        <label className='username'>
                            Username
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                        <label className='password'>
                            Password
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        {/*Need to add in forgotten password page*/}
                        <div className='forgot-password-link'>Forgotten password?</div>
                        <input className='submit-button' type="submit" value="Submit"/>
                    </form>
                    <Link className="link-wrap-titanic-fitness-logo" to="/"><img src={logo} width="409" height="222" alt="Titanic Fitness logo"/></Link>
                </div>
            </div>
        )
    
}