import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { editTodo } from '../utils';

export const EditTodo=({open,setOpen,id,todo})=> {

const [input,setInput]=useState(todo)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    editTodo(id,input)
    setOpen(false);
  };

  return (
    <div>
    
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle sx={{ color: '#f5adc5'}}>Modify task</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)} sx={{ color: '#f5adc5'}}>Cancel</Button>
          <Button onClick={handleSave} sx={{ color: '#f5adc5'}}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}