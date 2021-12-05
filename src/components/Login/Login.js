import React from 'react'
import './Login.css';


const Login = () => {
    return (
        <div className="loginFormBox">
            <form className="loginForm">
                <input type="text" name="username" placeholder="username" required={true}/>
                <input type="text" name="password" placeholder="password" required={true}/>

                <input type="submit" value="sign in"/>
            </form>
        </div>
    )
}

export default Login;