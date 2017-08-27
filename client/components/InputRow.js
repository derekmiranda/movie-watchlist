import React from 'react';
import PropTypes from 'prop-types';

const InputRow = ({ orderedFields, obj }) => {
  const cells = orderedFields.map((field, i) => (
    <td key={i}>
      <input name={field} value={obj[field]} />
    </td>
  ))

  return (
    <tr>
      { cells }
    </tr>
  )
}

InputRow.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  obj: PropTypes.object.isRequired,
  idx: PropTypes.number,
}

export default InputRow;