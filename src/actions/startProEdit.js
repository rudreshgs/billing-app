import axios from 'axios'

export const startProEdit = (formData, id) => {
    return (dispatch) => {
        const token = localStorage.getItem('token')
        axios.put(`https://dct-billing-app.herokuapp.com/api/products/${id}`,formData,{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
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