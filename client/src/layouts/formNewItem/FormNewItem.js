import React, { useState } from "react";



const FormNewItem = (props) => {

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const submit = () => {

    if (fullName.trim() === '' || phone.trim() === '')
      return;
    
    props.addContact(fullName, phone, comment);
    setFullName('');
    setPhone('');
    setComment('');
  }

  return (
    <div className='mt-3'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>ФИО</label>
          <input
            type='text'
            className='form-control'
            value={fullName}
            onChange={(e) => { setFullName(e.target.value); } }></input>
        <div className='mb-3'>
          <label className='form-label'>Номер телефона</label>
            <input
              type='text'
              className='form-control'
              value={phone}
              onChange={(e) => { setPhone(e.target.value); } }
            ></input>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Комментарий</label>
            <textarea
              className='form-control'
              rows={3}
              value={comment}
              onChange={(e) => { setComment(e.target.value); }}
            ></textarea>
        </div>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => submit(fullName, phone, comment)}
          >
              Добавить контакт
          </button>
        </div>
      </form>
    </div>
  )
};

export default FormNewItem;