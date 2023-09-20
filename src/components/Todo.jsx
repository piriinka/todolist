import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteTodo, doneTodo } from '../utils';
import { EditTodo } from './EditTodo';

export const Todo = ({done,todo,id}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
          <ListItem
            sx={{ color: '#f5adc5', borderBottom:'1px solid #f5adc5'}}
            key={id}
            secondaryAction={
              <>
              <IconButton edge="end" aria-label="delete" onClick={()=>deleteTodo(id)}>

            <DeleteOutlineOutlinedIcon 
             sx={{ color: '#f5adc5', ":hover":{color:'#c92a5f'}}}/>
             </IconButton>

            <IconButton edge="end" aria-label="edit" onClick={()=>setOpen(true)}>
            <EditOutlinedIcon sx={{ color: '#f5adc5', ":hover":{
          color:'#7fccff'}}}/>           
            </IconButton>
            </>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={()=>doneTodo(id,done)} dense>
             <ListItemIcon>

                <Checkbox
                sx={{ color: '#f5adc5'}}
                style={{ color: "#f5adc5" }}
                  edge="start"
                  checked={done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': id }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={todo} />
            </ListItemButton>
          </ListItem>
          {open && <EditTodo open={open} setOpen={setOpen} id={id} todo={todo}/>}
          </>
        );
      }
