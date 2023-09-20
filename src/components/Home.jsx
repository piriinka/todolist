import React, { useContext } from 'react'
import { Todos } from './Todos'
import { Login } from './Login'
import { UserContext } from '../context/UserContext'

export const Home = () => {
    const {user}=useContext(UserContext)
  return (
    <>
    {user ? <Todos /> : <Login />}
    </>
  )
}
