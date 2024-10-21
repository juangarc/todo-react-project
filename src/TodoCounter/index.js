import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { doneTask, allTotal } = React.useContext(TodoContext);

  return (
    <h1>
      Has completado {doneTask} de {allTotal} tareas
    </h1>
  );
}

export { TodoCounter };
