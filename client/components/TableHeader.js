import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ labels }) => {
  const headerCells = labels.map((label, i) => (
    <td key={i}>
      <h2>{label}</h2>
    </td>
  ))

  return (
    <thead>
      <tr>
        { headerCells }
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeader;