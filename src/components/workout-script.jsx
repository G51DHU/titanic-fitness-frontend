import naruto from '@a/naruto.png'
import { Link } from 'react-router-dom'

export default function WorkoutScript(){
    return(
        <div className='workoutscript-component'>
            <div className='workoutscript-border'>
                <section className='user-profile-container'>

                    <div className='profile-pic-portrait'>
                        <img src={naruto} className='user-profile-pic'></img>
                    </div>

                    <div className='line'></div>

                    <div className='workout-description-container'>
                        <div className='workoutscript-username-title'>Username</div>
                        <div className='real-name-title'>Real Name</div>
                        <div className='published-date'>Published on: 10/11/2021</div>
                    </div>
                </section>
                
                <section className='excersise-list-container'>
                    <div className='excersise-list'>
                        <div className='excersise-title'>Intese Workout</div>
                        <div className='excersise'>Press Ups 25x</div>
                        <div className='excersise'>Sit Ups 15x</div> 
                        <div className='excersise'>Bicep Curls Ups 40x</div>
                        <div className='excersise'>Rest For 1 Minute</div>
                        <div className='excersise'>Star Jumps 50x</div>
                        <div className='excersise'>Squats 50x</div>
                        <div className='excersise'>High Knees 50x</div>
                    </div>
                </section>
                <section className='start-excersise-button-container'>
                    <Link to='/RunWorkout' className='workout-page-link'>Run Workout</Link>
                </section>
            </div>
        </div>
    )
}