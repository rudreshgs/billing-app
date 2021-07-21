import React, {useState} from 'react'
import validator from 'validator'
import swal from 'sweetalert'
import {useDispatch} from 'react-redux'
import { startAddCx } from '../actions/startAddCx'

const AddCx = (props) => {

    const dispatch = useDispatch()
    const {handleAddNewCx} = props
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

    const handleSubmit = (e) =>{
        e.preventDefault()

        runValidations()
        if(Object.keys(errors).length === 0 ){
            setFormErrors({})
            const formData = {
                name,
                mobile,
                email
              }
            //   console.log(formData)
            dispatch(startAddCx(formData))

        //reset
        setName('')
        setMobile('')
        setEmail('')
        swal('Customer Added!','','success')
        if(handleAddNewCx !== undefined){
            handleAddNewCx()
        }
        }else{
            setFormErrors(errors)
            console.log(errors)
        }
    }

    return (
        <>
            <div className="row ml-5">
                <form className="form-inline" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-3">
                        {/* <label className="sr-only" for="inlineFormInputName2">Name</label> */}
                        <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="CustomerName" value={name} name="customer" onChange={handleChange}/>
                        {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
                        {formErrors.namelength && <small className="text-danger">{formErrors.namelength}</small>}
                    </div>
                    <div className="col-3">
                        {/* <label className="sr-only" for="inlineFormInputName2">Mobile</label> */}
                        <input type="number" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Mobile No" value={mobile} name="mobile" onChange={handleChange}/>
                        {formErrors.mobile && <small className="text-danger">{formErrors.mobile}</small>}
                    </div>
                    <div className="col-3">
                        {/* <label className="sr-only" for="inlineFormInputGroupUsername2">Email</label> */}
                        <input type="email" className="form-control mb-2 mr-sm-2" id="inlineFormInputGroupUsername2" placeholder="Email" value={email} name="email" onChange={handleChange}/><br/>
                        {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
                    </div>
                    <div className="col">
                        <input type="submit" className="btn btn-primary mb-2" value="Add"/>
                    </div>
                </div>
                </form>
                
            </div><br/>
        </>
    )
}

export default AddCx