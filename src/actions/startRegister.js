import axios from '../config/aaxiosConfig'

export const startRegister = (formData, history) => {
    return (dispatch) => {
        axios.post('/api/users/register',formData)
        .then((res) => {
            alert('Registration Successfull')
            history.push('/login')
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}