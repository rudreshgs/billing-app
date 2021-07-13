import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import loginReducer from '../reducers/loginReducer'
import cxReducer from '../reducers/cxReducer'
import proReducer from '../reducers/proReducer'
import billReducer from '../reducers/billReducer'

const configureStore = (props) =>{

    const store = createStore(combineReducers({

        user: loginReducer,
        customers: cxReducer,
        products: proReducer,
        bills: billReducer

    }),applyMiddleware(thunk))
    console.log(store)
    return store
}

export default configureStore