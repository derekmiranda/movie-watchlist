import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';
import AddMovieRow from './AddMovieRow';

const TableBody = ({ orderedFields, objs, newMovie }) => {
  const inputRows = objs.map((obj, i) => (
    <InputRow
      key={i}
      idx={i}
      orderedFields={orderedFields}
      obj={obj}
    />
  ));
  
  const newMovieRow = (
    <AddMovieRow
      orderedFields={orderedFields}
      obj={newMovie}
    />
  )

  return (
    <tbody>
      {inputRows}
      {newMovieRow}
    </tbody>
  )
}

TableBody.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  objs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TableBody;