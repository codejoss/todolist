import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter () {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  const todosCompletedMessage = 'No hay tareas pendientes';
  const normalMessage = `Has completado ${completedTodos} de ${totalTodos}`;

  const todoMessage = completedTodos === totalTodos ? todosCompletedMessage : normalMessage;
  return (
    <h1>
      {todoMessage}
    </h1>
  );
}

export { TodoCounter };
