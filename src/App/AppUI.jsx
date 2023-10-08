import React from 'react';
import { TodoContext } from '../TodoContext';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    generateUUID
  } = React.useContext(TodoContext);

  return (
    <>
      <div className='App'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          { loading && <TodosLoading /> }
          { error && <TodosError /> }
          { (!loading && searchedTodos.length === 0) && <EmptyTodos /> }

          { searchedTodos.map(todo => (
            <TodoItem
              key={generateUUID()}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
          </TodoList>

        <CreateTodoButton />

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      </div>
    </>
  );
}

export { AppUI };
