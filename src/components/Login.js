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
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-sm-8 col-lg-5 card bg-$gray-900">    
                <h3 className="text-center mt-3 text-$gray-900"> LOGIN </h3> 
                <form className="card-body" onSubmit= {handleSubmit}>
                    {formErrors.vemail && <small style={{color:"red"}}>{formErrors.vemail}</small>}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                             </div>
                            <input type= "email" placeholder="Email" className="form-control"  onChange={handleChange} name="email" value={email} /> <br />
                        </div>
                    {formErrors.vpassword && <small style={{color:"red"}}>{formErrors.vpassword}</small>}
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-user-secret"></i></span>
                            </div>
                            <input type= "password" className="form-control" placeholder="Password" onChange={handleChange} name="password" value={password} /> <br />
                        </div>
                        <div className="input-group mb-3">
                            <input type="submit" className="btn btn-success mx-auto" value="Login"/>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Login