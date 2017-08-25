import React from 'react';

const Row = ({ values }) => {
  const valueCells = values && values.map((value, i) => <td key={i}>{value}</td>);

  return (
    <tr>
      {valueCells}
    </tr>
  )
}

export default Row;