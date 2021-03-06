import axios from '../config/aaxiosConfig'

export const startProfile = () => {

    return(dispatch) => {
        axios.get('/api/users/account')
        .then((res)=> {
            console.log(res.data)
            dispatch(setUser(res.data))
        })
        .catch((err)=> {
            alert(err.message)
        })
    }
}

export const setUser= (data) => {
    return {
        type: 'SET_USER',
        payload: data
    }
}