
import { BUY_SUBSCRIPTION, PAYMENT_AMOUNT } from './payment.type';
export const paymentAmount = (payload)=>{
    return{
        type:PAYMENT_AMOUNT,
        payload
    }
}

export const validateUserInAcc = (payload)=>{
    return{
        type:PAYMENT_AMOUNT,
        payload
    }
}
export const buySubscription = (payload)=>{
    return{
        type:BUY_SUBSCRIPTION,
        payload
    }
}