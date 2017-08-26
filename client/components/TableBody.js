import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const TableBody = ({ fields, rows }) => {

  function createDefaultRow() {
    const emptyRowValues = new Array(fields.length).fill(null);
    const defaultRow = <Row items={emptyRowValues} />;
    return defaultRow;
  }

  const rowElems = rows.length ?
    rows.map((row, i) => <Row key={i} items={row} />)
    :
    createDefaultRow();
  
  return (
    <tbody>
      { rowElems }
    </tbody>
  )
}

TableBody.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.array),
}

export default TableBody;