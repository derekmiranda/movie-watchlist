import { connect } from 'react-redux';
import Table from '../components/Table';
import orderedFields from './orderedFields';

const capitalize = str => str[0].toUpperCase() + str.slice(1);
const labels = orderedFields.map(capitalize);

const mapStateToProps = (state) => ({
  orderedFields,
  labels,
  objs: state.movies,
  newMovie: state.newMovie,
})

const MoviesTable = connect(mapStateToProps)(Table);

export default MoviesTable;