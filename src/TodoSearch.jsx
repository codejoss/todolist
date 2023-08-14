import './TodoSearch.css';

function TodoSearch () {
  return (
    <input
      placeholder="Pagar renta..."
      className='TodoSearch'
      onChange={(event) => {
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
