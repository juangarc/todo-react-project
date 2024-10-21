import * as React from 'react';
import List from '@mui/material/List';


function TodoList(props) {
    return (
     <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'transparent', border: "solid", boxShadow: 15 , borderRadius: 5, marginTop: 5}}>
      {props.children}
     </List>
    )
  }

  export {TodoList}