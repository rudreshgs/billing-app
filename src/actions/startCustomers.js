import axios from '../config/aaxiosConfig'

export const startCustomers =() => {
    return (dispatch) => {
        axios.get('/api/customers')
        .then((res)=> {
            dispatch(setCustomers(res.data))
        })
        .catch((err)=> {
            console.log(err.message)
        })
    }
}

export const setCustomers = (data) => {
    return {
        type: 'SET_CX',
        payload: data
    }
}
