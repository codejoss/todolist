import './CreateTodoButton.css';

const addIcon = <img width="37" height="37" src="https://img.icons8.com/ios-glyphs/60/ffffff/plus-math.png" alt="plus-math"/>;

function CreateTodoButton () {
  return (
    <button
      className='CreateTodoButton'
      onClick={(event) => {
        console.log('Clic en agregar tarea');
        console.log(event.target);
      }
    }
    >
      {addIcon}
    </button>
  );
}

export { CreateTodoButton };
