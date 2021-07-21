import axios from '../config/aaxiosConfig'
import swal from 'sweetalert'

export const startLogin = (formData, history, handleAuth) => {

    return (dispatch) => {
        axios.post('/api/users/login',formData)
        .then((res)=> {
            if(res.data.hasOwnProperty('errors')){
                // alert(res.data.errors)
                swal('oops!',res.data.errors,'warning')
            } else {
                swal('Success!','logged in successfully!','success')
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard')
                handleAuth()
            }
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}