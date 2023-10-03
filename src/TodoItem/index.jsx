import './TodoItem.css';
import { CheckIcon } from './CheckIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>

      <CheckIcon
        completed={completed}
        onComplete={onComplete}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        { text }
      </p>
      <DeleteIcon
        onDelete={onDelete}
      />
    </li>
  );
}

export { TodoItem };
