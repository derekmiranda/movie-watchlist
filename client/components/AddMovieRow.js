import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './InputRow';

const AddMovieRow = ({ orderedFields, obj }) => {
  return (
    <InputRow orderedFields={orderedFields} obj={obj}/>
  )
}

AddMovieRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
}

export default AddMovieRow;