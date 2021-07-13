import React, {useState} from 'react'
import validator from 'validator'
import {useDispatch} from 'react-redux'
import { startAddcx } from '../actions/startAddCx'

const AddCx = (props) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const errors = {}

    const handleChange = (e) => {
        if(e.target.name === "customer"){
            setName(e.target.value)
        } else if (e.target.name === "mobile"){
            setMobile(e.target.value)
        } else if (e.target.name === "email"){
            setEmail(e.target.value)
        }
    }

    const runValidations = () => {
        if(!validator.isEmail(email)){
            errors.email = "enter valid email!!"
        }
        if(name.length === 0) {
            errors.name = "name is required"
        }
        if(name.length !== 0 && name.length <3){
            errors.namelength = "name must be above 3 characters"
        }
        if(mobile.length <10){
            errors.mobile = "number must be 10 characters "
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0){
            setFormErrors({})
        }

        const formData = {
            name,
            mobile,
            email
        }
        dispatch(startAddcx(formData))
        // console.log(formData)
        // reset
        setName('')
        setMobile('')
        setEmail('')
        alert('new customer added!!')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Customer Name" value ={name} name="customer" onChange={handleChange} /> 
                <input type="number" placeholder="Mobile No" value={mobile} name="mobile" onChange={handleChange} />
                <input type="email" placeholder="Email" value={email} name="email" onChange={handleChange} />
                <input type="submit" value="Add" />
            </form>

        </div>
    )
}

export default AddCx