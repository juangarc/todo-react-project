import React, {useState} from "react";
import { useLocalStorage } from "../TodoContext/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const [inputValue, setInputValue] = useState(""); // Estado para almacenar el valor
    const [searchValue, setSearchValue] = React.useState('');
  
    const {item: defaultTodos,
        saveItem: saveTodos,
        loading, 
        error} = useLocalStorage('TODOS_V1', []); // Estado para almacenar el valor
  
    const doneTask = defaultTodos.filter((obj) => !!obj.completed).length;
    const allTotal = defaultTodos.length;
    
    const filteredList = defaultTodos.filter((obj) => {
      const todoText = obj.text.toLowerCase(); 
      const searchText = searchValue.toLowerCase();
       
      return todoText.includes(searchText)});
    
    // Función para recibir el valor del hijo
    const handleInputChange = (value) => {
      setInputValue(value);
      //setDefaultTodos((prevItem) => [...prevItem, { text: value, completed: false }])
      defaultTodos.push({ text: value, completed: false });
      saveTodos(defaultTodos);
    };
  
    const handleCheckedChange = (value) => {
      const updatedItems = [...defaultTodos];
      updatedItems[value.idx] = value;
      saveTodos(updatedItems);
    }
  
    const deleteTodo = (value) => {
      const newTodos = [...defaultTodos];
      newTodos.splice(value.idx, 1);
      saveTodos(newTodos);
    }
  

    return (
        <TodoContext.Provider value={{
            doneTask,
            allTotal,
            searchValue,
            filteredList,
            handleCheckedChange,
            setSearchValue,
            deleteTodo,
            handleInputChange,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };