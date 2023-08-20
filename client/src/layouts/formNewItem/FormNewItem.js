import React from "react";


const FormNewItem = (props) => {
  return (
    <div className='mt-3'>
      <form>
        <div className='mb-3'>
          <label className='form-label'>ФИО</label>
          <input type='text' className='form-control'></input>
        <div className='mb-3'>
          <label className='form-label'>Номер телефона</label>
          <input type='text' className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Комментарий</label>
            <textarea className='form-control' rows={ 3 }></textarea>
        </div>
        </div>
        <div>
          <button className='btn btn-primary'
            onClick={props.addContact}>
              Добавить контакт
          </button>
        </div>
      </form>
    </div>
  )
};

export default FormNewItem;