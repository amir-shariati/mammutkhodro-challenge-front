import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { combineReducers } from 'redux';

import {

} from '../reducers'

const rootReducer = combineReducers({

})


let middleware
if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(
        applyMiddleware(
            // logger,
            thunk,
        )
    )
} else {
    middleware = applyMiddleware(
        thunk,
    )
}


const store = createStore( rootReducer, middleware)



export {store}