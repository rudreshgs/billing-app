const initialState = []

const billReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_BILLS' : {
            return [...action.payload].reverse()
        }
        case 'ADD_BILL' : {
            return [{...action.payload}, ...state]
        }
        default : {
            return state
        }
        case 'DELETE_BILL' : {
            return [...action.payload]
       }
    }
}

export default billReducer