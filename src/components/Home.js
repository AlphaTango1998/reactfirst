import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import data from "./Names.json"
import ReadOnlyRow from './ReadOnlyRow'
import EditableRow from './EditableRow'
import { Fragment } from 'react'


const Home = () => {

    const [List, setList] = useState(data);
    const [addFormData,setAddFormData] = useState({
        name: ''
    });

    const [editFormData, setEditFormData] = useState({
        name: ''
    });


    const [editContactId, setEditContactId] = useState(null);

    const handleAddform = (event) => {
        event.preventDefault();

        const field = event.target.getAttribute('name');
        const valu = event.target.value;
        const newData = {...addFormData};
        newData[field] = valu;

        setAddFormData(newData); 
    };

    const handleEditFormChange = (ev) => {
        ev.preventDefault();
        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);

    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newName = {
            id: nanoid(),
            name: addFormData.name
        };

        const newNames = [...List, newName];
        setList(newNames);
    };

    const handleEditFormSubmit = (even) => {
        even.preventDefault();
        const editedContact = {
            id: editContactId,
            name: editFormData.name
        }
        const newContacts = [...List];
        const index = List.findIndex((contact) =>contact.id === editContactId );
        newContacts[index] = editedContact;
        setList(newContacts);
        setEditContactId(null);
    }

    const handleEditClick = (eve, contact) => {
        eve.preventDefault();
        setEditContactId(contact.id);

        const formValues = {
            name: contact.name
        };
        setEditFormData(formValues);
    }


    const handleCancelClick = () =>{
        setEditContactId(null);
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [... List];
        const index = List.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setList(newContacts);
    }


      return (
        
        <div class='mdiv1'>
                <div class='ndiv'>
         
        <form onSubmit={handleAddFormSubmit}>
            <label>Name</label>
            <input type="text" name='name' required placeholder='Enter Name' autoComplete='on' onChange={handleAddform} />
            <button type='add'>Add in Team</button>
      
        </form>
                </div>
        
        <div class='ndiv'>
        <form onSubmit={handleEditFormSubmit}>
            <table>
                 
                    <th>Name</th>
                    <th>Action</th>
                <tbody>
                
                {List.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                    <EditableRow editFormData={editFormData}
                    handleEditFormChange = {handleEditFormChange}
                    handleCancelClick = {handleCancelClick}/>
                    ):(
                    <ReadOnlyRow contact ={contact} 
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}/>
                     )}
                   </Fragment>
                ))}
                </tbody>
            </table>
    
        </form>                 
        </div>
        </div>
    )
}

export default Home