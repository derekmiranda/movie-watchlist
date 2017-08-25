import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const ContactsTable = ({ fields, contacts }) => {
  const rows = contacts && contacts.map((contact) => {
    return fields.map(field => contact[field]);
  })

  return (
    <table>
      <TableHeader fields={fields} />
      <TableBody rows={rows} />
    </table>
  )
}

export default ContactsTable;