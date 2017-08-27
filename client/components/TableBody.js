import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const TableBody = ({ orderedFields, objs }) => {
  const inputRows = objs.map((obj, i) => <InputRow key={i} />);
  return (
    <tbody>
      {inputRows}
    </tbody>
  )
}

TableBody.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  objs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TableBody;