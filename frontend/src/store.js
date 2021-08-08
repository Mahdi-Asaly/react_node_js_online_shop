import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {productListReducer, productDetailsReducer,productSaveReducer,productDeleteReducer } from './reducers/productReducers';
import { paymentListReducer } from './reducers/paymentReducers';
import {cartReducer} from './reducers/cartReducers';
import {paymentSaveReducer} from './reducers/paymentReducers';
import thunk from 'redux-thunk';
import {recordListReducer,recordSaveReducer} from './reducers/recordReducers';

//const cartItems =  Cookie.getJSON("cartItems"|| [];
//const initialState = {  cart:{cartItems}    };
const initialState = {   };
const reducer = combineReducers({
    paymentList: paymentListReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    paymentSave: paymentSaveReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    recordSave: recordSaveReducer,
    recordList: recordListReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;