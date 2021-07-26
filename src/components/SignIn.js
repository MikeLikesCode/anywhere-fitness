import React,{useState} from 'react'

export default function SignIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    


    return (
        <form>
            <h3>Sign Into Your Account</h3>
            <div id='login'>
                <div id='username'>
                    <label>Username: </label>
                        <input type='text' name='username' onChange={(e)=> setUsername(e.target.value)} required/>
                </div>

                <div id='password'>
                    <label for='password'>Password: </label>
                        <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} required/>
                </div>

                <div id='logInButton'>
                    <button > Log In </button>
                    <br/>
                    <label>
                        <input type='checkbox' name='remember' />Remember Me
                    </label>
                </div>
            </div>
        </form>
    )
}
