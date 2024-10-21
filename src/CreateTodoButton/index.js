import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";
import { TodoContext } from "../TodoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CreateTodoButton() {
  const { handleInputChange } = React.useContext(TodoContext);
  const [open, setOpen] = React.useState(false);
  const [localInputValue, setLocalInputValue] = React.useState('');

    // Actualiza el valor local cada vez que el usuario escribe
    const handleChange = (event) => {
      setLocalInputValue(event.target.value);
    };
  
    // Envía el valor al padre cuando se presiona el botón
    const handleClick = () => {
      if (localInputValue.trim()) {
        handleInputChange(localInputValue); // Llama a la función del padre con el valor almacenado
        setLocalInputValue('');
        setOpen(false);
      }
    };
  


  const handleClose = (event) => {
    setOpen(event.target.checked);
    console.log(event.target.checked);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        style={{
          marginTop: 50,
          backgroundColor: "#2ecc71",
          fontWeight: "bold",
        }}
        variant="contained"
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra personalizada
          "&:hover": {
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Sombra cuando pasa el mouse
          },
        }}
        onClick={handleOpen}
      >
        Crear tarea
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontFamily: 'Kanit, sans-serif'}}>
            Asigne una nueva tarea
          </Typography>
          <TextField
            label="Tarea"
            variant="standard"
            size="small"
            style={{
              width: "25rem",
              color: "#FFF",
              marginTop: 15
            }}
            value={localInputValue}
            onChange={handleChange}
          />
          <Button
            style={{
              marginTop: 20,
              backgroundColor: "#2ecc71",
              fontWeight: "bold",
            }}
            variant="contained"
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra personalizada
              "&:hover": {
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Sombra cuando pasa el mouse
              },
            }}
            onClick={handleClick}
          >
            Crear
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export { CreateTodoButton };
