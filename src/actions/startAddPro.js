import axios from '../config/aaxiosConfig'

export const startAddPro = (formData) => {
    return (dispatch) => {
        axios.post('/api/products', formData)
        .then((res)=> {
            if(res.data.hasOwnProperty('errors')){
                alert(res.data.message)
            } else {
                dispatch(addProduct(res.data))
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }
}

export const addProduct = (data) => {
    return {
        type: 'ADD_PRO',
        payload: data
    }
}