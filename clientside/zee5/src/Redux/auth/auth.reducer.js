
import axios from 'axios';
import { BUY_SUBSCRIPTION } from '../payment/payment.type';

import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT, AUTH_SIGN_UP_ERROR, AUTH_SIGN_UP_LOADING, AUTH_SIGN_UP_SUCCESS } from './../auth/auth.type';
const getData = (key)=>{
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}

const init = {
    loading: false,
    data: {
        isAuth: !!getData('userCred')?.token,
        isRes: false,
        token: "",
        isPremium: false,
        name: getData('userCred')?.name || ""
    },
    error: false
}
export const authReducer = (state = init, { type, payload }) => {

    switch (type) {
        case AUTH_SIGN_IN_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case AUTH_SIGN_IN_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGN_IN_SUCCESS: {
            localStorage.setItem('userCred', JSON.stringify({ token: payload.token, name: payload.name }))

            return {
                ...state,
                loading: false,
                error: false,
                data: {
                    ...state.data,
                    isAuth: true,
                    token: payload.token,
                    name: payload.name
                }
            }
        }
        case AUTH_SIGN_UP_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_SIGN_UP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGN_UP_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: { ...state.data, isRes: true }
            }

        }
        case AUTH_SIGN_OUT: {
            localStorage.removeItem('userCred')
            return {
                ...state,
                loading: false,
                error: false,
                data:{...state.data,isAuth:false,name:"",token:""}
            }
        }

        case BUY_SUBSCRIPTION :{
            axios.patch(`https://vidfy.up.railway.app/users/payment`,payload)
            return{
                ...state,
                data:{...state.data,isPremium:true}
            }
        }
        default: return state
    }
}