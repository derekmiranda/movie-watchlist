import React from 'react';
import Cell from './Cell';

const Row = ({ values }) => {
  const valueCells = values && values.map(
    (value, i) => <Cell key={i} value={value}/>
  );

  return (
    <tr>
      {valueCells}
    </tr>
  )
}

export default Row;