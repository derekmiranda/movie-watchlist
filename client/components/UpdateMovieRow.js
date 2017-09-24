import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const UpdateMovieRow = ({ orderedFields, obj, updateValue, deleteMovie, idx }) => {
  const clearRow = () => deleteMovie(obj, idx);

  const removeBtn = (
    <button onClick={clearRow}>Remove</button>
  );

  return (
    <InputRow
      orderedFields={orderedFields}
      obj={obj}
      extraElems={[removeBtn]}
      changeValue={updateValue}
    />
  )
}

UpdateMovieRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
  updateValue: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
}

export default UpdateMovieRow;