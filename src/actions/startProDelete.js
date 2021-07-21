import axios from '../config/aaxiosConfig'

export const startProDelete = (id, flist) => {
    return (dispatch) => {
        axios.delete(`/api/products/${id}`)
        .then((res)=> {
            dispatch(setDeletedProlist(flist))
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}

export const setDeletedProlist = (data) => {
    return {
        type : 'PRO_DELETE',
        payload : data
    }
}