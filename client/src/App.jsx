import './App.css';
import TableView from './layouts/TableView';
import React, { useState, useEffect } from 'react';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import axios from 'axios'


const App = (props) => {

  const URL_API = props.url;

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${URL_API}/contacts`)
      .then(responce => {
        const data = [];
        responce.data._embedded.contacts.forEach(item => {
          data.push(
            {
              id:item.id,
              fullName: item.fullName,
              phone: item.phone,
              comments: item.comments
            }
          )
        })
        setItems(data);
      })
  }, [URL_API]);

  // const generateId = () => {
  //   let tempId = 0;
  //   items.forEach((el) => {
  //     const id = Number(el.id);
  //     if (tempId < id) {
  //       tempId = id;
  //     }
  //   })
  //   return ++tempId;
  // }
  
  const addContact = (fullName, phone, comment) => {
    
    // const currentId = generateId();
    const temp = {
      // id: currentId,
      fullName: fullName,
      phone: phone,
      comment: comment
    };

    const url = `${URL_API}/contacts`;
    axios.post(url, temp);
    setItems([...items, temp]);
  }

  const removeContact = (id) => {
    const url = `${URL_API}/contacts/${id}`;
    axios.delete(url);
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
