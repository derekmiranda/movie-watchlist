import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const TableHeader = ({ labels }) => {
  return (
    <thead>
      <Row values={labels} />
    </thead>
  )
}

TableHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeader;