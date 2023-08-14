import './TodoCounter.css';

function TodoCounter ({ total, complete }) {
  return (
    <h1 className='TodoCounter'>
      Has completado <span>{ complete }</span> de <span>{ total }</span> TAREAS
    </h1>
  );
}

export { TodoCounter };
