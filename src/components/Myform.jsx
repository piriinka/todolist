import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { AddTodo } from '../utils';

export const Myform = () => {
    const [input, setInput]=useState('')
    //console.log(input);

  return (
    <div className='form'>
        <TextField className="input"
        style={{ color: "#f5adc5" }}
        id="outlined-basic" 
        label="new task" 
        variant="outlined" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        sx={{ color: '#f5adc5', margin:'6px',}} />

        <AddCircleOutlineOutlinedIcon 
        onClick={()=>AddTodo(input)}
        sx={{
        fontSize:"3.5rem", color: '#f5adc5',":hover":{color:'#7fccff',}}}
        />
    </div>
  )
}
