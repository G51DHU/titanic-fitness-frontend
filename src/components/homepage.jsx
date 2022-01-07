import adimg from '@a/Group 2.png'


export default function HomePageComp(){
    
    return(
        <div className="Homepage-background">
            <div className="App-Ad">
                <div className="App-Ad-Text-Container">
                    <h1 className="App-Ad-Title">Check out our APP</h1>
                    <h4 className="App-Ad-Text">Available on Android, iOS, and Windows</h4>
                </div>
                <img src={adimg} alt="phone tablet laptop" />
            </div>

        </div>
    )
}