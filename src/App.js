import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Diseño tarjetas Tete', completed: true },
  { text: 'Comprar croquetas', completed: true },
  { text: 'Comprar leche', completed: false },
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar javascript', completed: false }
];

function App () {
  // Estados
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  // Begin component
  return (
    <div className='App'>
      <TodoCounter complete={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
       { searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
       )) }

      </TodoList>

      <CreateTodoButton />
    </div>
  );
}

export default App;
