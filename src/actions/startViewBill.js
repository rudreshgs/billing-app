import axios from '../config/aaxiosConfig'

export const startViewBill = (id,setViewData) =>{

    return (dispatch) =>{
        axios.get(`/api/bills/${id}`)
         .then(res=>{
            //  console.log(res.data)
             setViewData(res.data)
         })
         .catch(err=>{
             alert(err.message)
         })
    }
}
