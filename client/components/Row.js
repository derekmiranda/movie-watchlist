import React from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
  items: PropTypes.array,
}

export default Row;