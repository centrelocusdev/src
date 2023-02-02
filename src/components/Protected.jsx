import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isLoggedIn, children}) => (!isLoggedIn) ? <Navigate to="/" replace /> : children

export default Protected