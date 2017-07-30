import React from 'react';
import EditableValue from './EditableValue';

const ValueList = ({ values }) => {
  const valItems = values && values.map(value => <EditableValue value={value} />);
  return (
    <div></div>
  )
}

export default ValueList;
