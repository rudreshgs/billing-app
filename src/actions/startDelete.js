import axios from '../config/aaxiosConfig'

export const startDelete = (id,flist) =>{

    return (dispatch)=>{
          axios.delete(`/api/customers/${id}`)
          .then((res)=>{
               dispatch(setDeletedList(flist))
          })
          .catch((err)=>{
              alert(err.message)
          })
    }
}

export const setDeletedList = (data) =>{
    return {
        type : 'DELETE',
        payload : data
    }
}
