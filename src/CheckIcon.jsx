import React from 'react';
import { TodoIcon } from './TodoIcon';

function CheckIcon ({ completed, onComplete }) {
  return (
    <TodoIcon
      type='check'
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CheckIcon };
