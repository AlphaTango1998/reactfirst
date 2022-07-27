import React from 'react';

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input  type="text" 
                        required="required"
                        placeholder='Name' 
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <button type = "submit">Save</button>
                <button type = "cancel" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}
export default EditableRow