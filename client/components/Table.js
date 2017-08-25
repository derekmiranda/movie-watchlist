import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ labels, orderedFields, objs }) => {
  const rows = objs && objs.map((obj) => {
    return orderedFields.map(field => obj[field]);
  })

  return (
    <table>
      <TableHeader labels={labels} />
      <TableBody fields={orderedFields} rows={rows} />
    </table>
  )
}

Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  fields: PropTypes.arrayOf(PropTypes.string),
  objs: PropTypes.arrayOf(PropTypes.object),
}

export default Table;