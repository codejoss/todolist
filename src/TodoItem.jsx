import './TodoItem.css';
import { CheckIcon } from './CheckIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem ({ text, completed, onComplete, onDelete }) {
  return (
    <li className='TodoItem'>
      {/* <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
      V
      </span> */}
      <CheckIcon
        className={`Icon-svg Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        { text }
      </p>
      <DeleteIcon
        className={'Icon-svg Icon-delete'}
        onClick={onDelete}
      />
    </li>
  );
}

export { TodoItem };
