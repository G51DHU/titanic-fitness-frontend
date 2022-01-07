import { useState,useEffect } from "react"
import { useNavigate } from "react-router"



export default function RegisterComp(){
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
    const [passwordCondtions, setPasswordConditions] = useState(false)
    const navigate = useNavigate()

    function updateUsername(event){
        setUsername(event.target.value)
    }

    function updateEmail(event){
        setEmail(event.target.value)
    }

    function updatePassword(event){
        setPassword(event.target.value)
    }

    function updateConfirmPassword(event){
        setConfirmPassword(event.target.value)
    }

    function showPassword(){
        setPasswordVisible(!PasswordVisible)
    }
    


    function passwordValidation(password,event){
        
        const minUPPERCASE = /[A-Z]+/
        const minDIGIT = /\d+/
        const minSPECIALCHARACTER = /\W+/
        const minLOWERCASE = /[a-z]+/
        const minCHARACTERS = /.{8,}/


        let errors=[]

        if(!password.match(minUPPERCASE)){
            errors.push("password requires at least 1 uppercase character")
            setminUppercase(false)
        }
        else{
            setminUppercase(true)
        }
        if(!password.match(minLOWERCASE)){
            errors.push("password requires at least 1 lowercase character")
            setminLowercase(false)
        }
        else{
            setminLowercase(true)
        }
        if(!password.match(minDIGIT)){
            errors.push("password requires at least 1 number (0-9)")
            setminDigit(false)
        }
        else{
            setminDigit(true)
        }
        if(!password.match(minSPECIALCHARACTER)){
            errors.push("password requires at least 1 special character (!,?,%,etc)")
            setminSpecialChar(false)
        }
        else{
            setminSpecialChar(true)
        }
        if(!password.match(minCHARACTERS)){
            errors.push("password requires a minimum of 8 characters")
            setminChar(false)
        }
        else{
            setminChar(true)
        }
        console.log(errors)

    }
    


    useEffect(()=>{
        if(Username=== "" || Email=== "" || Password=== "" || ConfirmPassword === ""){
            setReadyToSubmit(false)
        }
        else{
            setReadyToSubmit(true)
        }
    })

    function ValidateFORM(event){
        event.preventDefault()
        passwordValidation(Password)
        if(minUppercase===true && minLowercase===true && minChar===true && minDigit===true && minSpecialChar===true){
            setPasswordConditions(true)
            if (Password===ConfirmPassword && passwordCondtions===true){
                navigate("/User")
            }
            else{ 
            }
        }
        else{
        }
    }
    return(
        <div className="Register-form-container">
            <h1>Register</h1>
            <form onSubmit={ValidateFORM}>
                <div className="Username-container">
                    <label>Username</label>
                    <input className="input-username" type="text" onChange={updateUsername} />
                </div>
                <div className="Email-container">
                    <label>Email</label>
                    <input className="input-email" type="email" onChange={updateEmail} />
                </div>
                <div className="password-container">
                    <div>
                        <label>Password</label>
                        <input 
                        className="input-password" 
                        type={PasswordVisible? "text":"password"}
                        onChange={updatePassword} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input 
                        className="input-password" 
                        type={PasswordVisible? "text":"password"}
                        onChange={updateConfirmPassword} />
                    </div>
                </div>
                
                <div className="Password-Conditions">
                    <label className={minUppercase? "password-req-met":"password-req-not"}>password requires at least 1 uppercase character</label>
                    <label className={minLowercase? "password-req-met":"password-req-not"}>password requires at least 1 lowercase character</label>
                    <label className={minSpecialChar? "password-req-met":"password-req-not"}>password requires at least 1 special character</label>
                    <label className={minDigit? "password-req-met":"password-req-not"}>password requires at least 1 digit</label>
                    <label className={minChar? "password-req-met":"password-req-not"}>password requires at least 8 characters</label>
                </div>

                <div className="checkbox-container">
                    <input onChange={showPassword} type="checkbox" />
                    <label>Show Password</label>
                </div>
                <input 
                className={!ReadyToSubmit?"Disabled-Submitbtn"  : "Submitbtn" }
                type="submit" 
                value="Register"
                disabled={!ReadyToSubmit}></input>
            </form>
        </div>
    )
}