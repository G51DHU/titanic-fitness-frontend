import logo from "@a/logo.svg";
import "@s/header.css"
import { Link } from "react-router-dom";

export default function Header(props){
    return(
        <div className="header">
            <img className="logo" src={logo} alt="logo"></img> 
            <Link className="login-button" to="/Login">Login</Link>
            <Link className="sign-button" value="sign up" to="/Register">Register</Link>
        </div>
    )
}