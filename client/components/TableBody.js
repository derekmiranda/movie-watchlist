import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const TableBody = ({ fields, rows }) => {

  const rowElems = rows && rows.length &&
    rows.map((row, i) => <Row key={i} idx={i} items={row} />);
  
  return (
    <tbody>
      { rowElems }
    </tbody>
  )
}

TableBody.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.array),
}

export default TableBody;