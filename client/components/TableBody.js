import React from 'react';
import Row from './Row';

const TableBody = ({ fields, rows }) => {
  const rowElems = rows && rows.map((row, i) => <Row key={i} items={row} />)
  
  function createDefaultRow() {
    const emptyRowValues = new Array(fields.length).fill(null);
    const defaultRow = <Row items={emptyRowValues} />;
    return defaultRow;
  }
  
  return (
    <tbody>
      {rowElems || createDefaultRow() }
    </tbody>
  )
}

export default TableBody;