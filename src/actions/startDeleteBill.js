import axios from '../config/aaxiosConfig'

export const startDeleteBill = (id, fdata) => {
    return (dispatch) => {
        axios.delete(`/api/bills/${id}`)
     .then((res)=>{
         dispatch(setDeleteBill(fdata))
     })
     .catch((err)=>{
         alert(err.message)
     })
    }
}

export const setDeleteBill = (data) => {
    return {
        type: 'DELETE_BILL',
        payload: data
    }
}