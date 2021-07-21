import axios from '../config/aaxiosConfig'

export const startEdit = (formData,id) =>{

    return (dispatch) =>{
        axios.put(`/api/customers/${id}`,formData)
        .then((res)=>{
           dispatch(setEditedData(res.data))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const setEditedData = (data) =>{
    return {
        type : 'EDIT',
        payload : data
    }
}
