import * as React from "react";
import '../App.css';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem({ text, completed, labelId, onChecked, onDelete }) {
  const [checked, setChecked] = React.useState(false);

  
  const handleChecked = () => {
    onChecked({idx: labelId, text: text, completed: !checked});
  }


  const handleChangeCheckbox = (event) => {
    setChecked(true);
    handleChecked();
  };

  return (
    
    <ListItem className="App-item">

        <ListItemIcon>
          {/* <Checkbox
            checked={checked}
            onChange={handleChangeCheckbox}
            edge="start"
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            sx={{
               // Color cuando no está seleccionado
              '&.Mui-checked': {
                color: '#FFF', // Color cuando está seleccionado
              },
            }}
          /> */}
          <CompleteIcon completed={completed}
          onChange={handleChangeCheckbox} />
        </ListItemIcon>
        <ListItemText style={{color: "#FFF", padding:0}}  
        primaryTypographyProps={{style: {fontFamily: 'Quicksand, sans-serif', 
        fontWeight: 'bold', fontSize: 16,
        textDecoration: checked ? 'line-through': 'none'}}} 
        id={labelId} primary={text}  />
        <DeleteIcon completed={completed}
        onClick={onDelete}/>
       {/*  <span 
        className="Icon Icon-delete"
        onClick={onDelete}>
          X
        </span> */}

      {/* <span>V</span>
      <p>{text}</p>
      <span>{completed}</span> */}
    </ListItem>
  );
}

export { TodoItem };
