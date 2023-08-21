import './App.css';
import TableView from './layouts/TableView';
import React, { useState, useEffect } from 'react';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import axios from 'axios'


const App = () => {

  const [items, setItems] = useState([]
    // [
    //   { id: '1', fullName: '123', phone: '+7 123 456 789', comment: 'comment 1' },
    //   { id: '2', fullName: '123', phone: '+7 123 456 789', comment: 'comment 2' },
    // { id: '3', fullName: '123', phone: '+7 123 456 789', comment: 'comment 3' },
    // { id: '4', fullName: '123', phone: '+7 123 456 789', comment: 'comment 4' },
    // ]
  );

  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts')
      .then(responce => {
        const data = [];
        responce.data._embedded.contacts.forEach(item => {
          data.push(
            {
              fullName: item.fullName,
              phone: item.phone,
              comments: item.comments
            }
          )
        })
        setItems(data);
      })
  }, []);

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
