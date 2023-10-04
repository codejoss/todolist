import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) {
  return (
    <>
      <div className='App'>
        <TodoCounter
        complete={completedTodos}
        total={totalTodos} />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          { loading && <p>Estamos cargando...</p> }
          { error && <p>Ocurrio un error en la carga de los datos</p> }
          { (!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p> }

        { searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )) }

        </TodoList>

        <CreateTodoButton />
      </div>
    </>
  );
}

export { AppUI };
