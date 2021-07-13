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
                <label> Name </label>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={name} />
                <label> Mobile </label>
                <input type="number" placeholder="Mobile No" name="mobile" onChange={handleChange} value={mobile} />
                <label> Email </label>
                <input type="email" placeholder="Enter email" name="email" onChange={handleChange} value={email} />
                <ModalFooter>
                    <input type="submit" value="Update"/> {' '}
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </form>
        </div>
    )
}

export default EditForm