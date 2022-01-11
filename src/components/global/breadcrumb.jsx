<<<<<<< HEAD
import {Link, useLocation} from "react-router-dom"

export default function Breadcrumb(){
    const style = {
        "breadcrumb-bg":{
            width: "100%",
            height: "2.5REM",
            backgroundColor: "#A9EACF",
            display:"flex",
            alignItems: "center"
        },
        "breadcrumb":{
            marginLeft: "12%",
            width:"75%", 
            height: "100%",
            display:"flex",
            alignItems: "center"
        },
        "breadcrumb-triangle-right":{
            width: "0",
            height: "0",
            borderTop: "7px solid transparent",
            borderLeft: "20px solid #363A3E",
            borderBottom: "7px solid transparent",
            marginRight:"0.6%"
        },
        "breadcrumb-crumb":{
            marginRight:"0.7%",
            textDecoration: "none",
            fontFamily: "Roboto, sans-serif",
            color:"#363A3E"
        }
    }
    var current_path = useLocation().pathname
    var crumbs = current_path.split("/")
    crumbs.splice(0,1)

    return(
        <div style={style["breadcrumb-bg"]}>    
            <div style={style["breadcrumb"]}>
                {
                    crumbs.map((crumb, index) => (
                        <>
                            <div style={style["breadcrumb-triangle-right"]}></div> 
                            <Link style={style["breadcrumb-crumb"]} to={"/"+crumbs.slice(0,index+1).join("/")}>
                                {crumb.charAt(0).toUpperCase()+crumb.slice(1).replace("-", " ")}
                            </Link>
                        </>
                    ))
                }          
            </div>
=======

export default function Breadcrumb(){
    const style = {
        "breadcrumbs":{width: "100%"}
    }

    return(
        <div className="breadcrumb">

>>>>>>> f373ba6cb2195841599321346788a7b01adc072d
        </div>
    )
}