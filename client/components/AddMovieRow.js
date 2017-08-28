import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';
import keyPressHandlerCreator from './utils/keyPressHandlerCreator'

const AddMovieRow = ({ orderedFields, obj, isValid, editNewMovieValue, submitNewMovie }) => {
  const submitValidNewMovie = () => isValid && submitNewMovie(obj);
  const addBtn = (
    <button onClick={submitValidNewMovie}>Add</button>
  );
  const extraRowElems = isValid ? [addBtn] : [];
  const keyPressHandler = keyPressHandlerCreator({
    Enter: submitValidNewMovie,
  });

  return (
    <InputRow
      orderedFields={orderedFields}
      obj={obj}
      extraElems={extraRowElems}
      changeValue={editNewMovieValue}
      onKeyPress={keyPressHandler}
    />
  )
}

AddMovieRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  editNewMovieValue: PropTypes.func.isRequired,
  submitNewMovie: PropTypes.func.isRequired,
}

export default AddMovieRow;