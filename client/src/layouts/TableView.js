import React from "react";
import TableRowItem from "./components/TableRowItem";

const TableView = () => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>ФИО</th>
          <th scope='col'>Телефон</th>
          <th scope='col'>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <th>ФИО 1</th>
          <th>Телефон 1</th>
          <th>Комментарий 1</th>
        </tr>
        <TableRowItem />
        <TableRowItem />
        <TableRowItem />
        <TableRowItem />
        <TableRowItem />
      </tbody>
    </table>
  )
}

export default TableView;