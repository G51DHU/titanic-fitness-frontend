import "@s/blogs.css"
import logo from "@a/logo.svg"

export default function BlogDisplayComp(){
    return(
        <div className="blogs-container">
            <h1>Blog</h1>
            <div className="user-profile-container">
                <div className='profile-pic-portrait'>
                    <img src={logo} className='user-profile-pic'></img>
                </div>
                <div className='line'></div>
                <div className='workout-description-container'>
                <div className='workoutscript-username-title'>Username</div>
                <div className='real-name-title'>Real Name</div>
                <div className='published-date'>Published on: 10/11/2021</div>
            </div>
            </div>
            <div>

            </div>
        </div>
    )
}