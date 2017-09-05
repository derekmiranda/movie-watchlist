import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import orderedFields from './orderedFields';

const capitalizeStrs = (strs) => strs.map(
  str => str[0].toUpperCase() + str.slice(1)
);

const Table = ({ objs, newMovie, fetching }) => {
  const labels = capitalizeStrs(orderedFields);
  return (
    <table>
      <TableHeader labels={labels} />
      <TableBody
        orderedFields={orderedFields}
        objs={objs}
        newMovie={newMovie}
        fetching={fetching}
      />
    </table>
  )
}

Table.propTypes = {
  objs: PropTypes.arrayOf(PropTypes.object).isRequired,
  newMovie: PropTypes.object,
}

export default Table;