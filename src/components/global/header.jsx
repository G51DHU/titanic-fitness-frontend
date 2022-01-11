import logo from "@a/logo.svg";
import { Link } from "react-router-dom";

const style = { 
    "header": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    
        height: "100px",
    
        paddingLeft:  "10%",
        paddingRight: "10%"
    },
    "link-wrap-titanic-fitness-logo":{
        height:"150%"
    },
    "logo":{
        height: "100%"
    },
    "header-button-seperator":{
        display: "flex",
        justifyContent: "right",
        alignItems:"center",
        height: "100%",
        width: "100%",
        paddingRight: "1%"
    },
    "header-button": {
        borderRadius: "10pt",
        minWidth: "100px",
    
        height: "50%",
        margin: "10px",
        backgroundColor: "#7DCCAB",
        color: "black",
    
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        textDecoration: "none",
    }
    /*need media query to add change header  padding for sides to 40 from 20.*/ 

}
export default function Header(props){
    return(
        <header style={style["header"]}>
            <Link style={style["link-wrap-titanic-fitness-logo"]} to="/"><img style={style["logo"]} src={logo} alt="Titanic Fitness logo"/></Link>
            <div style={style["header-button-seperator"]}>
                <Link style={style["header-button"]} to="/auth/login">Login</Link>
                <Link style={style["header-button"]} value="sign up" to="/auth/register">Register</Link>
            </div>
        </header>
    )
}