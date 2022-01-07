import logo from '@a/logo.svg'
import "@s/login.css"


export default function LoginBox(){
    return(
        <section className='login-page-background'>
            <div className='login-component'>
                <div className='login-form-border'>

                    <form className='login-form'>

                        <div>
                            <h1 className='title'>Sign In</h1>
                        </div>
                        
                        

                        <div className='username-container'>
                            <label className='username-label'>Username</label>
                            <input type='text' className='Username-input'/>
                        </div>

                        <div className='password-container'>
                            <label className='password-label'>Password</label>
                            <input type='password' className='password-input'/>
                        </div>

                        <div className='forgot-password-container'>
                            <div className='forgot-password-link'>Forgotten password?</div>
                        </div>

                        <div className='submit-button-container'>
                            <input type='submit' className='submit-button'/>
                        </div>
                    </form>
                    <img src={logo} className='titanic-fittness-logo' alt="Titanic Fittness logo"/>
                </div>
            </div>
        </section>
    )
}