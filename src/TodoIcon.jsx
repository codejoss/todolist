/* eslint-disable quote-props */
import { FaCheck as CheckIcon, FaTrashAlt as DeleteIcon } from 'react-icons/fa';

const iconTypes = {
  'check': <CheckIcon />,
  'delete': <DeleteIcon />
};
function TodoIcon ({ type }) {
  return (
    <span
      className={`Icon Icon-svg Icon-${type}`}
    >
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
