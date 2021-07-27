import React,{useState} from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'

export default function SignIn() {
    const [userAccount, setUserAccount] = useState({
        userId: '',
        password:'',
        remember:'off'
    })
    const history = useHistory()
    const onChange=evt=>{
        evt.persist()
        let newUserAccount = {...userAccount, [evt.target.name]: evt.target.value }
        setUserAccount(newUserAccount)
    }
    const handleSubmit = async evt =>{
        evt.preventDefault()
        try { 
            await axios.post('', userAccount)
            history.push("/dashboard")
        } catch(err){
            console.log(err)
        } 
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Into Your Account</h3>

            <div id='login'>

                <div id='username'>
                    <label>Username: </label>
                        <input type='text' name='userId' placeholder='UserID' onChange={onChange} required />
                </div>

                <div id='password'>
                    <label for='password'>Password: </label>
                        <input type='password' name='password' placeholder='Password' onChange={onChange} required />
                </div>

                <div id='logInButton'>
                    <button type='submit' > Log In </button>
                    <br/>
                    <label>
                        <input type='checkbox' name='remember' onChange={onChange} />Remember Me
                    </label>
                </div>
            </div>
        </form>
    )
}
