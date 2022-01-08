import logo from '@a/logo-cropped.svg'
import "@s/login.css"


export default function LoginPage(){
    return(
        <div className='login-page-background'>
            <div className='login-component'>
                <form className='login-form'>
                    <h1>Sign In</h1>
                    <label className='username'>
                        Username
                        <input type='text'/>
                    </label>
                    <label className='password'>
                        Password
                        <input type='password'/>
                    </label>
                    {/*Need to add in forgotten password page*/}
                    <div className='forgot-password-link'>Forgotten password?</div>
                    <input type='submit' className='submit-button'/>
                    <img src={logo} width="409" height="222" className='titanic-fitness-logo' alt="Titanic Fitness logo"/>
                </form>
            </div>
        </div>
    )
}