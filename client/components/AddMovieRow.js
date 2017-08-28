import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';
import keyPressHandlerCreator from './utils/keyPressHandlerCreator'

const AddMovieRow = ({ orderedFields, obj, isValid, editNewMovieValue, addMovie }) => {
  const addValidMovie = () => isValid && addMovie(obj);
  const addBtn = (
    <button onClick={addValidMovie}>Add</button>
  );
  const extraElems = isValid ? [addBtn] : [];
  const keyPressHandler = keyPressHandlerCreator({
    Enter: addValidMovie,
  });

  return (
    <InputRow
      orderedFields={orderedFields}
      obj={obj}
      extraElems={extraElems}
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
  addMovie: PropTypes.func.isRequired,
}

export default AddMovieRow;