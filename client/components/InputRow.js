import React from 'react';
import PropTypes from 'prop-types';

const InputRow = ({ orderedFields, obj, extraElems }) => {
  const inputs = orderedFields.map((field) => (
    <input name={field} value={obj[field]} />
  ))

  const items = inputs.concat(extraElems || []);
  const cells = items.map((item, i) => (
    <td key={i}>
      {item}
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
  extraElems: PropTypes.arrayOf(PropTypes.element),
}

export default InputRow;