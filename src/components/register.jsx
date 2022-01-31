import "@s/register.css"
import { useState,useEffect } from "react"
import { Link, useNavigate  } from "react-router-dom"
import logo from '@a/logo-cropped.svg'



export default function RegisterPage(){
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const [PasswordVisible, setPasswordVisible] = useState(false)
    const [ReadyToSubmit, setReadyToSubmit] = useState(false)
    const [minUppercase, setminUppercase] = useState(false)
    const [minDigit, setminDigit] = useState(false)
    const [minSpecialChar, setminSpecialChar] = useState(false)
    const [minLowercase, setminLowercase] = useState(false)
    const [minChar, setminChar] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        const minUPPERCASE = /[A-Z]+/
        const minDIGIT = /\d+/
        const minSPECIALCHARACTER = /\W+/
        const minLOWERCASE = /[a-z]+/
        const minCHARACTERS = /.{8,}/

        if(!Password.match(minUPPERCASE)){
            setminUppercase(false)
        }
        else{
            setminUppercase(true)
        }
        if(!Password.match(minLOWERCASE)){
            setminLowercase(false)
        }
        else{
            setminLowercase(true)
        }
        if(!Password.match(minDIGIT)){
            setminDigit(false)
        }
        else{
            setminDigit(true)
        }
        if(!Password.match(minSPECIALCHARACTER)){
            setminSpecialChar(false)
        }
        else{
            setminSpecialChar(true)
        }
        if(!Password.match(minCHARACTERS)){
            setminChar(false)
        }
        else{
            setminChar(true)
        }
    },[Password])


    useEffect(()=>{
        if(Username=== "" || Email=== "" || Password=== "" || ConfirmPassword === ""){
            setReadyToSubmit(false)
        }
        else{
            setReadyToSubmit(true)
        }
    }, [Username, Email, Password, ConfirmPassword])

    function SumbitRegistration(event){
        event.preventDefault()
        
        passwordValidation(Password)
        if(minUppercase===true && minLowercase===true && minChar===true && minDigit===true && minSpecialChar===true){
            if (Password===ConfirmPassword){
                navigate("/user")
            }
        }
    }


    return(
        <div className="register-form">
            <form onSubmit={SumbitRegistration}>
                <h1>Register</h1>
                <label className="label-username">
                    Username
                    <input className="input-username" type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label className="label-email">
                    Email
                    <input className="input-email" type="email" onChange={e => setEmail(e.target.value)} />    
                </label>

                <section className="password-container">
                    <label>
                        Password
                        <input 
                            type={PasswordVisible? "text":"password"}
                            onChange={e => setPassword(e.target.value)}> 
                        </input>
                    </label>
                    <label>
                        Confirm Password
                        <input 
                            type={PasswordVisible? "text":"password"}
                            onChange={e => setConfirmPassword(e.target.value)}>
                        </input>
                    </label>
                </section>
                <label className="label-show-password">
                    Show Password
                    <input onChange={e => setPasswordVisible(!PasswordVisible)} type="checkbox" />
                </label>

                <input 
                    className={!ReadyToSubmit?"submitbtn submitbtn-disabled"  : "submitbtn submitbtn-enabled" }
                    type="submit" 
                    value="Register"
                    disabled={!ReadyToSubmit}>
                </input>
            </form>
            <div className="Password-Conditions">
                <label className={minUppercase? "password-req-met":"password-req-not"}>password requires at least 1 uppercase character</label>
                <label className={minLowercase? "password-req-met":"password-req-not"}>password requires at least 1 lowercase character</label>
                <label className={minSpecialChar? "password-req-met":"password-req-not"}>password requires at least 1 special character</label>
                <label className={minDigit? "password-req-met":"password-req-not"}>password requires at least 1 digit</label>
                <label className={minChar? "password-req-met":"password-req-not"}>password requires at least 8 characters</label>
            </div>
            <Link className="link-wrap-titanic-fitness-logo" to="/"><img src={logo} width="409" height="222" alt="Titanic Fitness logo"/></Link>
        </div>
    )
}