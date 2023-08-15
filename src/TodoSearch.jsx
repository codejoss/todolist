import './TodoSearch.css';

function TodoSearch ({
  searchValue,
  setSearchValue
}) {
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
