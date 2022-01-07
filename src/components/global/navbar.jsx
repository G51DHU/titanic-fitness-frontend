import { Link } from "react-router-dom"
import homeButtonImg from '@a/icons8-home.svg'

export default function NavbarComp(){
    function PlansDropdown(){

    }


    return(
        <div className="Navbar">
            <div className="Link-Container">
                <Link className="PlansBtn" to="/User/Plans">Workout</Link>
                <div className="Dropdown">
                    <Link to="/User/Workout-Plans">My Workouts</Link>
                    <Link to="/User/Diet-Plans">Diet Plans</Link>
                </div>
                <Link to="/User/Statistics">Statistics</Link>
            </div>
                <Link to="/User"><img src={homeButtonImg} alt="Home" className="Home-Button" /></Link>
            <div className="Link-Container">
                <Link to="/User/Goals">Goals</Link>
                <Link to="/User/Blogs">My Blog</Link>
            </div>
        </div>
    )
}