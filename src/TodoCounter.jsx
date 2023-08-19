import './TodoCounter.css';

function TodoCounter ({ total, complete }) {
  const todosCompletedMessage = 'No hay tareas pendientes';
  const normalMessage = `Has completado ${complete} de ${total}`;
  const todoMessage = complete === total ? todosCompletedMessage : normalMessage;
  return (
    <h1>
      {todoMessage}
    </h1>
  );
}

export { TodoCounter };
