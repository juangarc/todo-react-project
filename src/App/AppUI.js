import React from "react";
import { TodoCounter } from "../TodoCounter";
import "../App.css";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Divider } from "@mui/material";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <div className="App">
      <TodoCounter />
      <section className="App-header">
        <TodoSearch />

        <TodoContext.Consumer>
          {({
            filteredList,
            handleCheckedChange,
            deleteTodo,
            loading,
            error,
          }) => (
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && filteredList.lenght === 0 && <EmptyTodos />}
              {filteredList.map((todo, indx) => (
                <React.Fragment key={indx}>
                  <div style={{}}>
                    <TodoItem
                      key={indx}
                      text={todo.text}
                      completed={todo.completed}
                      labelId={indx}
                      onChecked={handleCheckedChange}
                      onDelete={deleteTodo}
                    />
                    <Divider variant="middle" component="li" />
                  </div>
                </React.Fragment>
              ))}
            </TodoList>
          )}
        </TodoContext.Consumer>
        <CreateTodoButton  />
      </section>
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edita el archivo <code>src/App.js</code> y guarda para recargar.
          </p>
          <a
            className="App-link"
            href="https://platzi.com/reactjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    </div>
  );
}

export { AppUI };
