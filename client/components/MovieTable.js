import React from 'react';
import EditableValue from './EditableValue';
import ValueList from './ValueList';

const MovieTable = () => {
  return (
    <table>
      <tr className='header'>
        <th>Title</th>
        <th>Director</th>
        <th>Actors</th>
        <th>Tags</th>
        <th>Notes</th>
      </tr>
      <tr className='newMovie'>
        <td><EditableValue /></td>
        <td><EditableValue /></td>
        <td><ValueList /></td>
        <td><ValueList /></td>
        <td><EditableValue /></td>
      </tr>
    </table>
  )
}

export default MovieTable;