export default function MyBlogsComp(){
    return(
        <div className="MyBlogsContainer">
            <div className="MyBlogsContainer-Title-Container">
                <h1>My Blogs</h1>
            </div>

            <div className="MyBlogsContainer-Form-Container">
                <form>
                    <input className="Search-Submit" type="submit"></input>
                    <input className="Search-Bar" type="text"></input>
                </form>
            </div>

            <div className="MyBlogsContainer-Featured-Container">
                <div>
                    <h3>Feautured Workouts</h3>
                </div>
            </div>

            <div className="MyBlogsContainer-MyWorkouts-Container">
                <div>
                <h3>My Workouts</h3>
                
                </div>
            </div>
        </div>
    )
}