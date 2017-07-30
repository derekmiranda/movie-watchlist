import React from 'react';
import EditableValue from './EditableValue';

const ValueList = ({ values }) => {
  const valItems = values && values.map((value, idx) => (
    <li key={idx}>
      <EditableValue value={value} />
    </li>
  ))

  return (
    <ul>
      { valItems }
      <li><EditableValue /></li>
    </ul>
  )
}

export default ValueList;
