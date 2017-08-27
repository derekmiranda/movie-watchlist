import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ orderedFields, objs }) => {  
  return (
    <tbody>
    </tbody>
  )
}

TableBody.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  objs: PropTypes.arrayOf(PropTypes.object),
}

export default TableBody;