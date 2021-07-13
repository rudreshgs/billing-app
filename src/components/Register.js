import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import validator from'validator'
import {startRegister} from '../actions/startRegister'

const Register = (props) => {
    const dispatch = useDispatch()

    const [user, setUser] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bname, setBname] = useState('')
    const [address, setAddress] = useState('')

    const errors = {}
    const [formErrors, setFormErrors] = useState({})

    const runValidations = () => {
        if(user.trim().length === 0){
            errors.name = "name cannot be blank"
        }
        if((user.trim().length >=1) && (user.trim().length <=3)){
            errors.namelength = "name must be more than 3 letters"
        }
        if(email.trim().length === 0){
            errors.email = "email cannot be blank"
        }
        if(password.trim().length === 0){
            errors.password = "password cannot be blank"
        }
        if(email.trim().length !== 0 && !validator.isEmail(email)){
            errors.vemail = "enter valid email"
        }
        if(password.trim().length !== 0 && password.trim().length < 8){
            errors.vpassword = "password must be min 8 characters"
        }
    }

    const handleChange= (e) => {
        if(e.target.name === 'user'){
            setUser(e.target.value)
        } else if(e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        } else if(e.target.name === 'bname'){
            setBname(e.target.value)
        } else if(e.target.name === 'address'){
            setAddress(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})

            const formData = {
                username: user,
                email: email,
                password: password,
                businessName: bname,
                address: address
            }
            // console.log(formData)

            dispatch(startRegister(formData,props.history))

            // reset
            setUser('')
            setEmail('')
            setPassword('')
            setBname('')
            setAddress('')
        } else {
            console.log(errors)
            setFormErrors(errors)
        }
    }


    return (
        <div>
            <h3>REGISTER WITH US</h3>
            <form onSubmit= {handleSubmit}>
                <input type= "text" placeholder="Username" onChange={handleChange} name="user" value={user} /> <br />
                <input type= "email" placeholder="Email" onChange={handleChange} name="email" value={email} /> <br />
                <input type= "password" placeholder="Password" onChange={handleChange} name="password" value={password} /> <br />
                <input type= "text" placeholder="Business Name" onChange={handleChange} name="bname" value={bname} /> <br /> 
                <textarea type= "text" placeholder="Address" onChange={handleChange} name="address" value={address} /> <br />
                <input type= "submit" value="Register" />

            </form>
        </div>
    )
}
export default Register 