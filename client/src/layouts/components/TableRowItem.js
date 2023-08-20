import React from "react";

const TableRowItem = (props) => {
  return (
    <tr>
      <th scope='row'>{ props.contact.id }</th>
      <th>{ props.contact.fullName }</th>
      <th>{ props.contact.phone }</th>
      <th>{ props.contact.comment }</th>
    </tr>
  )
}

export default TableRowItem;