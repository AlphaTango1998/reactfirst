import React from 'react';

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>{contact.name}</td>
            <td>
                <button type="button1" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
                <button type="button2" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
            </td>   
        </tr>
    )
}
export default ReadOnlyRow