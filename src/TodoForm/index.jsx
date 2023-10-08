import { useContext, useState } from 'react';
import './TodoForm.css';
import { TodoContext } from './../TodoContext';

function TodoForm () {
  const [newTodoValue, setNewTodoValue] = useState('');

  const {
    setOpenModal,
    addTodo
  } = useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTask = newTodoValue.trim();
    addTodo(newTask);
    setOpenModal(false);
  };

  const onCancel = (event) => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>

      <label>Crea un nuevo TODO</label>
      <textarea
        required
        autoFocus
        placeholder="Comprar despensa"
        value={newTodoValue}
        onChange={onChange}
      />

      <div className="TodoForm-buttonContainer">
        <button
          type='button'
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >Cancelar</button>
        <button
        type='submit'
          className="TodoForm-button TodoForm-button--add"
        >Crear</button>
      </div>

    </form>
  );
}

export { TodoForm };
