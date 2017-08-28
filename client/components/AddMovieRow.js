import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const AddMovieRow = ({ orderedFields, obj, editNewMovieValue, addMovie }) => {
  const onClick = () => addMovie(obj);
  const addBtn = (
    <button onClick={onClick}>Add</button>
  );

  const onEnter = event => event.key === 'Enter' && addMovie(obj);

  return (
    <InputRow
      orderedFields={orderedFields}
      obj={obj}
      extraElems={[addBtn]}
      changeValue={editNewMovieValue}
      onEnter={onEnter}
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