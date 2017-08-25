import React from 'react';
import Row from './Row';

const TableHeader = ({ labels }) => {
  return (
    <thead>
      <Row values={labels} />
    </thead>
  )
}

export default TableHeader;