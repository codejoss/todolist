import './CreateTodoButton.css';

import React from 'react';
import { TodoContext } from '../TodoContext';

const addIcon = <img width="37" height="37" src="https://img.icons8.com/ios-glyphs/60/ffffff/plus-math.png" alt="plus-math"/>;

function CreateTodoButton () {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className='CreateTodoButton'
      onClick={() => setOpenModal(!openModal)}
    >
      {addIcon}
    </button>
  );
}

export { CreateTodoButton };
