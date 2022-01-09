import "@s/navbar.css"
import { Link } from "react-router-dom"
import homeButtonImg from '@a/home.svg'

export default function NavbarComp(){
    //function PlansDropdown(){

    //}


    return(
        <div className="navbar">
            <div className="Link-Container">
                <Link className="PlansBtn" to="/user/my-plans">Plans</Link>
                <div className="Dropdown">
                    <Link to="/user/my-workouts">My Workouts</Link>
                    <Link to="/user/my-meal-plans">Diet Plans</Link>
                </div>
                <Link to="/user/my-statistics">Statistics</Link>
            </div>
                <Link to="/user"><img src={homeButtonImg} alt="Home" className="Home-Button" /></Link>
            <div className="Link-Container">
                <Link to="/user/my-goals">Goals</Link>
                <Link to="/user/my-blogs">My Blog</Link>
            </div>
        </div>
    )
}