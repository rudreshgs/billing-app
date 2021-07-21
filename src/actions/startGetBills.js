import axios from '../config/aaxiosConfig'

export const startGetBills = () => {
    return(dispatch) => {
        axios.get('/api/bills')
        .then((res)=> {
            dispatch(setBills(res.data))
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}

export const setBills = (data) => {
    return {
        type: 'GET_BILLS',
        payload: data
    }
}