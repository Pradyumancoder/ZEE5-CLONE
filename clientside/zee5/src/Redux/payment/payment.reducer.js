import { BUY_SUBSCRIPTION, PAYMENT_AMOUNT } from "./payment.type"

const init = {
    amountPay:0,
 
}
export const paymentReducer = (state=init,{type,payload})=>{
    switch(type){
        case PAYMENT_AMOUNT :{
            return{
                ...state,
                amountPay:payload
            }
        }
       
        default : return state
    }
}