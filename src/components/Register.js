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
            // console.log(errors)
            setFormErrors(errors)
        }
    }


    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-sm-8 col-lg-5 card bg-$gray-900"> 
            <h3 className="test-center mt-4 text-$gray-900">REGISTER WITH US</h3>
            <form className="card-body" onSubmit= {handleSubmit}>
                {formErrors.name && <small style={{color:"red"}}>{formErrors.name}</small>}{formErrors.namelength && <small style={{color:"red"}}>{formErrors.namelength}</small>}
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className='fas fa-user-alt'></i></span>
                    </div>
                    <input type= "text" className="form-control" placeholder="Username" onChange={handleChange} name="user" value={user} required  /> <br />
                </div>
                {formErrors.email && <small style={{color:"red"}}>{formErrors.email}</small>}{formErrors.vemail && <small style={{color:"red"}}>{formErrors.vemail}</small>}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                        </div>    
                        <input type= "email" className="form-control"  placeholder="Email" onChange={handleChange} name="email" value={email} required  /> <br />
                    </div>
                {formErrors.pass && <small style={{color:"red"}}>{formErrors.pass}</small>}{formErrors.vpass && <small style={{color:"red"}}>{formErrors.vpass}</small>}
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-user-secret"></i></span>
                        </div>
                        <input type= "password" className="form-control" placeholder="Password" onChange={handleChange} name="password" value={password} required  /> <br />
                </div>
                <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-suitcase"></i></span>
                        </div>
                        <input type= "text" placeholder="Business Name" className="form-control" onChange={handleChange} name="bname" value={bname} required  /> <br />
                </div>
                <div className="input-group mb-3"></div>
                    <textarea type= "text" className="form-control"  placeholder="Address" onChange={handleChange} name="address" value={address} required  /> <br />
                <div className="input-group mb-3">
                    <input type= "submit" className="btn btn-success mx-auto" value="Register" />
                </div>
            </form>
            </div>
        </div>
    )
}
export default Register 