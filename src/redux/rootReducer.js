// import all reducers
import {productReducer} from './slices/product'



import { combineReducers } from "redux";



// register all reducer here
const rootReducer = combineReducers({
    product: productReducer
})


export default rootReducer


