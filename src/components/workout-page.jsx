import naruto from '@a/naruto.png'
import video from '@a/WorkoutVid.mp4'
export default function WorkoutPage(){
    return(
        <div className='workout-page-boarder'>
            <div className='workout-page-component'>
                <section className='user-profile-container'>

                    <div className='profile-pic-portrait'>
                        <img src={naruto} c lassName='user-profile-pic'></img>
                    </div>

                    <div className='line'></div>

                    <div className='workout-description-container'>
                        <div className='workoutscript-username-title'>Username</div>
                        <div className='real-name-title'>Real Name</div>
                        <div className='published-date'>Published on: 10/11/2021</div>
                    </div>
                </section>

                <section className='description-row-container'>
                    <div className='excersise-workoutpage-title'>Intense Workout</div>

                    <div className='diffuculty-container'> 
                    <div className='diffculty'>Difficulty:    Hard</div>
                    </div>
                </section>

                <section className='video-container'>
                    <video src={video} width="700" height="300" controls="controls" autoplay="true" />
                </section>
            </div>
        </div>
    )
}