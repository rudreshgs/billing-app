import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import validator from 'validator'
import {startLogin} from '../actions/startLogin'


const Login = (props) => {
    const {handleAuth} = props
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const errors={}
    const [formErrors, setFormErrors] = useState({})
    
    const handleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    const runValidations =() => {
        if(!validator.isEmail(email)){
            errors.vemail = "invalid email!!"
        }
        if((password.trim().length === 0) || (password.trim().length < 8)){
            errors.vpassword = "password must be atleast 8 characters!!"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                email: email,
                password: password
            }
            // console.log(formData)
            dispatch(startLogin(formData, props.history, handleAuth))
        } else {
            setFormErrors(errors)
            console.log(formErrors)
        }

        // reset
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h3> LOGIN </h3> 
            <form onSubmit= {handleSubmit}>
                <input type= "email" placeholder="Email" onChange={handleChange} name="email" value={email} /> <br />
                <input type= "password" placeholder="Password" onChange={handleChange} name="password" value={password} /> <br />
                <input type= "submit" value="Login" />
            </form>
        </div>
    )
}

export default Login