import React from 'react'
import { Button } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

export const Logout = () => {
  const {logoutUser}=useContext(UserContext)
    
  return (
    <div>
        <Button variant='contained' onClick={logoutUser}  sx={{bgcolor:'#f5adc5',
        ":hover":{
          bgcolor:'#e2779b'
        }}}>
            <LogoutRoundedIcon />
        </Button>
    </div>
  )
}

