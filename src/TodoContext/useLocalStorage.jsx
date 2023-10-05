import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 4000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

// ! ADD THIS COMMENTED CODE IN THE CONSOLE OF THE WEB BROWSER TO HAVE TODO'S ITEMS IN THE LOCALSTORAGE
/* const defaultTodos = [
  { text: 'Diseño tarjetas Tete', completed: true },
  { text: 'Comprar croquetas', completed: true },
  { text: 'Comprar leche', completed: false },
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar javascript', completed: false },
  { text: 'Estudiar java para aprender a realizar backend', completed: false }
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */

// ! DELETE LOCALSTORAGE DATA
// localStorage.removeItem('TODOS_V1');
