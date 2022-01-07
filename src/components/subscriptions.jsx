import "@s/subscriptions.css"

export default function Subscriptions(){
    return(
        <div className="subcriptions">
            <h1><u>Subscriptions</u></h1>
        
            <div className="subscripton-plans">

                <div className="plan" >
                    <div>
                        <h2>Weekly</h2>
                        <hr/>
                        <p>Best for those who want to try the app, for first time.</p>
                        <h2>Price</h2>
                        <hr/>
                        <p className = "fat">£0.9</p>
                    </div>
                </div>

                <div className="plan">
                    <div>
                        <h2>Monthly</h2>
                        <hr/>
                        <p>Best for those who want the flexibility and are serious about fitness.</p>
                        <h2>Price</h2>
                        <hr/>
                        <p className="pablo">£4</p>
                    </div>
                </div>

                <div className="plan">
                    <div>
                        <h2>Annual</h2>
                        <hr/>
                        <p>Never worry about your subscription running out! </p>
                        <h2>Price</h2>
                        <hr/>
                        <p className="damn">£43.89</p>
                    </div>
                </div>
            </div>

        </div>
    )
}