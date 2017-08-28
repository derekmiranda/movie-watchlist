import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const AddMovieRow = ({ orderedFields, obj, updateValue }) => {
  const onClick = () => addMovie(obj);
  const removeBtn = (
    <button onClick={onClick}>Remove</button>
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

AddMovieRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
  updateValue: PropTypes.func.isRequired,
}

export default AddMovieRow;