import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const TableRowItem = (props) => {
  return (
    <tr>
      <th scope='row'>{ props.contact.id }</th>
      <th>{ props.contact.fullName }</th>
      <th>{ props.contact.phone }</th>
      <th>{props.contact.comment}</th>
      <td type="submit"
              className="btn"
              onClick={() => { props.removeContact(props.contact.id); }}>
        <FontAwesomeIcon icon={faTrash} />
      </td>
    </tr>
  )
}

export default TableRowItem;