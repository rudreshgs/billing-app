import axios from '../config/aaxiosConfig'

export const startAddCx = (formData) => {

    return (dispatch) => {
        // const token = localStorage.getItem('token')
        axios.post('/api/customers',formData,{
        })
        .then((res)=> {
            console.log('added data',res.data)
            const result = res.data
            if(res.data.hasOwnProperty('errors')){
                console.log(result)
                alert(result.message)
            } else {
                dispatch(addCx(res.data))
            }
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}

export const addCx = (data) => {
    return {
        type : 'ADD',
        payload : data
    }
}