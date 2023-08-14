import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Diseño tarjetas Tete', completed: false },
  { text: 'Comprar leche', completed: false },
  { text: 'Comprar croquetas', completed: true },
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar javascript', completed: false }
];

function App () {
  return (
    <div className='App'>
      <TodoCounter complete={7} total={18} />
      <TodoSearch />

      <TodoList>

       { defaultTodos.map(todo => (
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
