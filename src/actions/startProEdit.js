import axios from '../config/aaxiosConfig'

export const startProEdit = (formData, id) => {
    return (dispatch) => {
        axios.put(`/api/products/${id}`,formData)
        .then((res)=> {
            dispatch(setEditedData(res.data))
        })
        .catch((err=> {
            alert(err.message)
        }))
    }
}

export const setEditedData = (data) => {
    return {
        type: "PRO_EDIT",
        payload: data
    }
}