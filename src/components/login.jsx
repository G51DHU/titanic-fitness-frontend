import { useState } from 'react'
import logo from '@a/logo-cropped.svg'
import "@s/login.css"
import {Navigate} from 'react-router-dom';


export default function LoginPage(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isValidUser, setIsValidUser] = useState(false)

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
        .then(data => console.log(data))
        .then(
            data => {
                if (data == "True"){
                    setIsValidUser(true)
                }
            }
        )    
    }

    if (isValidUser == true){
        return <Navigate to="/user"></Navigate>
    }
    
    else{
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
                        <text className='forgot-password-link'>Forgotten password?</text>
                        <input className='submit-button' type="submit" value="Submit"/>
                    </form>
                    <img src={logo} width="409" height="222" className='titanic-fitness-logo' alt="Titanic Fitness logo"/>
                </div>
            </div>
        )
    }
}