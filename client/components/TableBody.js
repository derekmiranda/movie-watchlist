import React from 'react';
import Row from './Row';

const TableBody = ({ rows }) => {
  const rowElems = rows.map((row, i) => <Row key={i} values={row} />)
  return (
    <tbody>
      {rowElems}
    </tbody>
  )
}

export default TableBody;