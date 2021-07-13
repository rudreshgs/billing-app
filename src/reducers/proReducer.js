const initialState = []

const proReducer = (state= initialState, action) => {

    switch(action.type) {
        case 'SET_PRO' : {
            return [...action.payload].reverse()
        }
        case 'ADD_PRO' : {
            return [{...action.payload}, ...state]
        }
        case 'PRO_DELETE' : {
            return [...action.payload]
        }
        case 'PRO_EDIT' : { 
            return state.map(ele => {
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        default: {
            return state
        }
    }
}

export default proReducer