import { useEffect, useState } from 'react';
import { db } from '../firebaseApp';
import { onSnapshot, collection } from 'firebase/firestore';
import { Logout } from './Logout';
import List from '@mui/material/List';
import { Todo } from './Todo';
import { Myform } from './Myform';
import { readTodos } from '../utils';

export const Todos = () => {
  const [todos,setTodos]=useState([])

  useEffect(() => {
    
    const unsubscribe = readTodos(setTodos)
    return () => unsubscribe()
  }, []);

  return (
    <div className='todos'>
      <h1 className='mytodolisth1'>My to-Do List</h1>
      <Logout/>
      <Myform/>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin:'auto' }}>

      {todos.map(obj=>
        <Todo key={obj.id} {...obj} />
      )}
      </List>
    </div>
  );
}

