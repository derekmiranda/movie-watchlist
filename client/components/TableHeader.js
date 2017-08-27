import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ labels }) => {
  return (
    <thead>
    </thead>
  )
}

TableHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeader;