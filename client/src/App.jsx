import './App.css';
import TableView from './layouts/TableView';
import React, { useState } from 'react';
import FormNewItem from './layouts/formNewItem/FormNewItem';


const App = () => {

  const [items, setItems] = useState(
    [
      { id: '1', fullName: '123', phone: '+7 123 456 789', comment: 'comment 1' },
      { id: '2', fullName: '123', phone: '+7 123 456 789', comment: 'comment 2' },
      // { id: '3', fullName: '123', phone: '+7 123 456 789', comment: 'comment 3' },
      // { id: '4', fullName: '123', phone: '+7 123 456 789', comment: 'comment 4' },
    ]
  )


  const generateId = () => {
    let tempId = 0;
    items.forEach((el) => {
      const id = Number(el.id);
      if (tempId < id) {
        tempId = id;
      }
    })
    return ++tempId;
  }
  
  const addContact = (fullName, phone, comment) => {
    
    const currentId = generateId();
    console.log(currentId);
    const temp = {
      id: currentId,
      fullName: fullName,
      phone: phone,
      comment: `${comment} ${currentId}`
    };
    setItems([...items, temp]);
  }

  const removeContact = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>Contact list</h1>
        </div>
        <div className='card-body'>
          <TableView data={items} removeContact={ removeContact } />
          <FormNewItem addContact={ addContact } />
        </div>
      </div>
   </div>
  );
}

export default App;
