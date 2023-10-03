import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App () {
  // Estados
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // Begin component
  return (
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}

    />
  );
}

export default App;

// ! ADD THIS COMMENTED CODE IN THE CONSOLE OF THE WEB BROWSER TO HAVE TODO'S ITEMS IN THE LOCALSTORAGE
/* const defaultTodos = [
  { text: 'Diseño tarjetas Tete', completed: true },
  { text: 'Comprar croquetas', completed: true },
  { text: 'Comprar leche', completed: false },
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar javascript', completed: false },
  { text: 'Estudiar java para aprender a realizar backend', completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

// ! DELETE LOCALSTORAGE DATA
// localStorage.removeItem('TODOS_V1');
