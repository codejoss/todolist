import React from 'react';
import './TodoSearch.css';

function TodoSearch () {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <input
      placeholder="Pagar renta...."
      className='TodoSearch'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
