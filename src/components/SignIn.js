import React,{useState} from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'

export default function SignIn() {
    

    const [userAccount, setUserAccount] = useState({
        userId: '',
        password:'',
        remember:'off',
        error: ''
    })

    const history = useHistory()

    const onChange=evt=>{
        evt.persist()
        let newUserAccount = {...userAccount, [evt.target.name]: evt.target.value }
        setUserAccount(newUserAccount)
    }

    const handleSubmit = evt =>{
        evt.preventDefault()
        setUserAccount({...userAccount, error: ''})
        axios
            .post('https://anytime-fitness-unit4.herokuapp.com/login', userAccount)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push("/dashboard")
            })
            .catch(err => {
                setUserAccount({
                    ...userAccount,
                    error: 'Uh oh... wrong username/password. Please try again. But right this time.' 
                })
                
            })
            
            // Testing API
            // axios
            //     .get('https://anytime-fitness-unit4.herokuapp.com/users')
            //     .then(res => {
            //         console.log(res.data)
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })
            
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Into Your Account</h3>

            <div id='login'>
                <div className='errorMessage'>
                    <h3>{userAccount.error}</h3>
                </div>
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
