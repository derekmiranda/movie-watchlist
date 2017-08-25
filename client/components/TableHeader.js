import React from 'react';
import Row from './Row';

const TableHeader = ({ fields }) => {
  return (
    <thead>
      <Row values={fields} />
    </thead>
  )
}

export default TableHeader;