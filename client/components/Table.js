import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ labels, orderedFields, objs }) => {

  return (
    <table>
      <TableHeader labels={labels} />
      <TableBody orderedFields={orderedFields} objs={objs} />
    </table>
  )
}

Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  objs: PropTypes.arrayOf(PropTypes.object),
}

export default Table;