import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {ModalFooter,Button} from 'reactstrap'
import {startEdit} from '../actions/startEdit'

const EditForm = (props) =>{
    const dispatch = useDispatch()

    const {toggle, editData } = props

    const [name, setName] = useState(editData[0].name)
    const [email, setEmail] = useState(editData[0].email)
    const [mobile, setMobile] = useState(editData[0]. mobile)


    const handleChange = (e) =>{   
        if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'mobile'){
            setMobile(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            name : name,
            mobile : mobile,
            email : email
        }
        dispatch(startEdit(formData,editData[0]._id))
        toggle() // to close modal
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="exampleInputPassword1"> Name </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" name="name" onChange={handleChange} value={name} />
            </div>
            <div className="form-group">
                <label for="exampleInputMobile1"> Mobile </label>
                <input type="number" className="form-control" id="exampleInputMobile1" placeholder="Mobile No" name="mobile" onChange={handleChange} value={mobile} />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1"> Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" onChange={handleChange} value={email} />
            </div>
            <ModalFooter>
                <input className="btn btn-primary" type="submit" value="Update"/> {'  '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </form>
        </div>
    )
}

export default EditForm