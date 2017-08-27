import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = ({ idx, items }) => {
  const itemCells = items && items.map(
    (item, i) => <Cell key={i} idx={idx}>{item}</Cell>
  );

  return (
    <tr>
      {itemCells}
    </tr>
  )
}

Row.propTypes = {
  idx: PropTypes.number.isRequired,
  items: PropTypes.array,
}

export default Row;