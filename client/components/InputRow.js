import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

const InputRow = ({ fields, values }) => {
  const inputs = values.map((value, i) => {
    const field = fields[i];
    const input = <input key={i} name={field} value={value} />;
    return input;
  })

  return (
    <Row fields={fields} items={inputs} />
  )
}

InputRow.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default InputRow;