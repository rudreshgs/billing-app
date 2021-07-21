import axios from '../config/aaxiosConfig'

export const startPostBill = (formData) =>{
    return (dispatch) =>{

          axios.post('/api/bills',formData)
          .then((res)=>{
              console.log('from post api',res.data)
              dispatch(setPostData(res.data))
          })
          .catch((err)=>{
              alert(err.message)
          })
    }
}

export const setPostData = (data) =>{
    return {
        type : 'ADD_BILL',
        payload : data
    }
}
