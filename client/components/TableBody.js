import React from 'react';
import PropTypes from 'prop-types';
import MovieRow from '../containers/MovieRow';
import NewMovieRow from '../containers/NewMovieRow';

const TableBody = ({ orderedFields, objs }) => {
  const addedMovieRows = objs.map((obj, i) => (
    <MovieRow
      key={i}
      idx={i}
      orderedFields={orderedFields}
    />
  ));
  
  const newMovieRow = (
    <NewMovieRow orderedFields={orderedFields}/>
  )

  return (
    <tbody>
      {addedMovieRows}
      {newMovieRow}
    </tbody>
  )
}

TableBody.propTypes = {
  orderedFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  objs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TableBody;