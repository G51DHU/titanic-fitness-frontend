import adimg from '@a/devices_with_logo.png'

const style = {
    "homepage-background": {
        height: "70vh", 
        alignItems: "center"
    },
    "app-ad": {
        background: "linear-gradient(270deg,  #7DCCAB 0%, rgba(255, 219, 153, 0.83) 100%)", 
        display: "flex", 
        flexDirection: "row",
        alignItems: "center", 
        marginTop: "10vh", 
        marginLeft: "9%", 
        width: "82%"
    },

    "app-ad > img": {
        width: "50%", 
        margin: "5vw"},
    
    "app-ad-text-container":{
        padding: "5vw", 
        borderRight: "solid 2px black"},
    
    "app-ad-title":{
        fontWeight: "normal",
        fontSize: "3vw"
    },
    "app-ad-text":{
        fontWeight: "normal",
        fontSize: "1vw"
    }
}

export default function HomePageComp(){
    return(
        <div style={style['homepage-background']}>
            <div style={style["app-ad"]}>
                <div style={style['app-ad-text-container']}>
                    <h1 style={style['app-ad-title']}>Check out our APP</h1>
                    <text style={style['app-ad-text']}>Available on Android, iOS, and Windows</text>
                </div>
                <img style={style['app-ad > img']}src={adimg} alt="phone tablet laptop" />
            </div>
        </div>
    )
}