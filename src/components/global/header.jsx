import logo from "@a/logo.svg";
import { Link } from "react-router-dom";

const style = { 
    "header": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1px",
        borderLeft: "none",
        borderRight: "none",
    
        height: "100px",
    
        paddingLeft:  "10%",
        paddingRight: "10%",
    },
    "logo":{
        height:"150%",
        flex:"1",
        paddingRight: "50%",
    },
    "header-button": {
        borderRadius: "10pt",
        minWidth: "100px",
    
        height: "40%",
        width: "20%",
        margin: "10px",
        backgroundColor: "#7DCCAB",
        color: "black",
    
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        textDecoration: "none",
    },
}
export default function Header(props){
    return(
        <header style={style["header"]}>
            <img style={style["logo"]} src={logo} alt="logo"></img> 
            <Link style={style["header-button"]} to="/Login">Login</Link>
            <Link style={style["header-button"]} value="sign up" to="/Register">Register</Link>
        </header>
    )
}