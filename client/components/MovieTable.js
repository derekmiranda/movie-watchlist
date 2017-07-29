import React from 'react';

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
        <td><input type='text' /></td>
        <td><input type='text' /></td>
        <td></td>
        <td></td>
        <td><input type='text' /></td>
      </tr>
    </table>
  )
}

export default MovieTable;