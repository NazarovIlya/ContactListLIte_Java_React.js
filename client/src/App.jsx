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
  
  const addContact = (fullName, phone, comment) => {

    const currentId = items.length + 1
    const temp = {
      id: currentId,
      fullName: fullName,
      phone: phone,
      comment: comment
    };
    setItems([...items, temp]);
  }
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>Contact list</h1>
        </div>
        <div className='card-body'>
          <TableView data={items} />
          <FormNewItem addContact={ addContact } />
        </div>
      </div>
   </div>
    
  );
}

export default App;
