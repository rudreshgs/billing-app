const initialState = []

const billReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_BILLS' : {
            return [...action.payload].reverse()
        }
        default : {
            return state
        }
    }
}

export default billReducer