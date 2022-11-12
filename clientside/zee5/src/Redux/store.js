import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
 import thunk from "redux-thunk"
import { authReducer } from './auth/auth.reducer';
import { paymentReducer } from './payment/payment.reducer';

 const rootReducer = combineReducers({
    auth:authReducer,
    payment:paymentReducer
 });

 const createCompose =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose

 export const store = legacy_createStore(rootReducer,createCompose( applyMiddleware(thunk)))