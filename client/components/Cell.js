import React from 'react';

const style = {
  border: '1px solid black',
}

const Cell = ({ children }) => {
  return (
    <td style={style}>
      { children }
    </td>
  )
}

export default Cell;