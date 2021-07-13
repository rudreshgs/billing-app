import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startProfile} from '../actions/startProfile'

const Profile = (props) => {

    const user = useSelector((state)=> {
        return state.user
    })

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(startProfile())
    }, [])

    return (
        <div>
            <h2>Profile</h2>
            <p> Admin Name : {user.username} </p>
            <p> Email : {user.email} </p>
            <p> Business Name : {user.businessName} </p>
            <p> Address : {user.address} </p>
        </div>
    )
}

export default Profile