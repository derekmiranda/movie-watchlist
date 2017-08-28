import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const AddMovieRow = ({ orderedFields, obj, editNewMovieValue, addMovie }) => {
  const onClick = () => addMovie(obj);
  const addBtn = (
    <button onClick={onClick}>Add</button>
  );

  return (
    <InputRow
      orderedFields={orderedFields}
      obj={obj}
      extraElems={[addBtn]}
      changeValue={editNewMovieValue}
    />
  )
}

AddMovieRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
  editNewMovieValue: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
}

export default AddMovieRow;