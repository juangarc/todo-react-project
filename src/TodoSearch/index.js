import * as React from "react";
import TextField from "@mui/material/TextField";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);


  return (
    <TextField label="Buscar" 
    variant="standard" 
    size="small" 
    style={{
      width: '30rem',
      color: '#FFF'
    }} 
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
      
    }}
    />
  );
}

export { TodoSearch };
