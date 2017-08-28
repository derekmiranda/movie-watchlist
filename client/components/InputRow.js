import React from 'react';
import PropTypes from 'prop-types';


const InputRow = ({
  orderedFields,
  obj,
  extraElems,
  changeValue,
  onEnter = () => {}
}) => {
  const fieldToInput = (field) => {
    const value = obj[field];
    const onChange = (event) => {
      const newValue = event.target.value;
      return changeValue(field, newValue);
    }
    return (
      <input
        type='text'
        name={field}
        value={value}
        onChange={onChange}
        onKeyPress={onEnter}  
      />
    )
  }

  const inputs = orderedFields.map(fieldToInput);
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
  changeValue: PropTypes.func.isRequired,
  onEnter: PropTypes.func,
}

export default InputRow;