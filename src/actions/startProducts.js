import axios from 'axios'

export const startProducts = () =>{

    return (dispatch) =>{
        const token = localStorage.getItem('token')

        axios.get('https://dct-billing-app.herokuapp.com/api/products',{
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((res)=>{
            dispatch(setProducts(res.data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export const setProducts = (data) =>{
    return {
        type : 'SET_PRO',
        payload : data
    }
}
