import React from 'react';
import Cell from './Cell';

const Row = ({ items }) => {
  const itemCells = items && items.map(
    (item, i) => <Cell key={i}>{item}</Cell>
  );

  return (
    <tr>
      {itemCells}
    </tr>
  )
}

export default Row;