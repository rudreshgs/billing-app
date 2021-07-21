import axios from '../config/aaxiosConfig'

export const startProducts = () =>{

    return (dispatch) =>{
        axios.get('/api/products')
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
