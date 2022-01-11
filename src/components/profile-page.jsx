import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@s/profile-page.css"
import tempimage from '@a/naruto.png'
import blog from '@a/blog.svg'
import trophy from '@a/trophy.svg'
import stats from '@a/statistics-graph.svg'
import plate from '@a/dinner-plate.svg'

export default function ProfilePage(props){
    return(
        <div className='profile-page'>
                <h1 className='page-title'><b>My Profile</b></h1>
                <img src={tempimage} className='user-picture' alt='profile avatar' defer/>
                <h2 className='user-username'>Username</h2>

                <section className='section-goals'>
                    <div className='img-wrap'><img className="goals-image" src={trophy} alt='Trophy' defer/></div>
                    <div className='goals-info'>
                        <h2> Goals</h2> 
                        <h3 className='goals-total-steps'>2500/5000</h3>
                        <progress className='goals-progress-bar' value="32" max="100"> 32% </progress>    
                    </div>   
                    <div className='dropdown-triangle'></div>
                </section>

                <section className='section-statistics'>
                    <div className='img-wrap'><img className="statistics-image" src={stats} alt='A graph' defer/></div>
                    <div className='statistics-info'>
                        <h2 className='statistics-stats-title'>Statistics</h2>
                        <p className='ranking'>1st On Global Leaderboard</p>
                    </div>
                    <div className='dropdown-triangle'></div>
                </section>

                <section className='meal-plan-container'>
                    <div className='img-wrap'><img className="meal-plan-image" src={plate} alt='A meal' defer/></div> 
                    <div className='meal-plan-info'>
                        <h2 className='meal-plan-title'>Meal Plans</h2>
                        <div className='meal-plans-created'>No Meal Plans Created</div>
                    </div>
                    <div className='dropdown-triangle'></div>
                </section>

                <section className='blog-container'>
                    <div className='img-wrap'><img className="blog-image" src={blog} alt='A sheet of paper' defer/></div>
                    <div className='info-container'>
                        <h2 className='blog-title'>My Blog</h2>
                        <div className='blog-display'>No Blog</div>
                    </div>
                    <div className='dropdown-triangle'></div>
                </section>
        </div>
    )
}