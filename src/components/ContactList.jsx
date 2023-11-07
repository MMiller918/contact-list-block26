import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';



export default function ContactList() {
  const [contacts, setContacts] = useState([])
  console.log("Contacts", contacts)

  useEffect(() =>{
    async function fetchContacts(){
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setContacts(result);
      } catch(err) {
        console.error(err)
      }
    }
    fetchContacts()
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact}/>;
        })}
      </tbody>
    </table>
  );
}

