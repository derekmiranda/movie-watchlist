import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
  objs: state.movies,
  newMovie: state.newMovie,
})

const MoviesTable = connect(mapStateToProps)(Table);

export default MoviesTable;