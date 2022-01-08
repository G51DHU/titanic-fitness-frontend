import logo from '@a/logo.svg'

const style = {
    "footer":{
        backgroundColor: "#2D5277",
        position: "static",
        width: "100vw",
        maxWidth: "100%",
        bottom: "0",
    },
    "footer > img": {
        width: "20vw",
        height: "20vh",
    }
}

export default function FooterComp(){
    return(
    <div style={style["footer"]}>
        <img style={style['footer > img']} src={logo} alt="Logo"/>
    </div>)
}
