import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const CrossRoute = ({children}) => {
    const {user} = UserAuth()
    if(user?.email){
        return <Navigate to ="/"/>
    }
    else{
        return children
    }

}

export default CrossRoute