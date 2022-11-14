import React from 'react'
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const PrivRoutVideo = ({children}) => {
    const state = useSelector(state => state);
    if (!state?.auth?.data?.isAuth) {
        // console.log("if condition",state)
        return <Navigate to="/login" />
    }
    return children
}

export default PrivRoutVideo