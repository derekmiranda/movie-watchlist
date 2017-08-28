import createMovieRowContainer from './createMovieRowContainer';
import AddMovieRow from '../components/AddMovieRow';
import { editNewMovieValue, addMovie } from '../actions/creators';

const mapStateToProps = (state) => ({
  obj: state.newMovie,
})

const mapDispatchToProps = (dispatch) => ({
  editNewMovieValue: (field, value) => dispatch(editNewMovieValue(field, value)),
  addMovie: (movie) => dispatch(addMovie(movie)),
})

const NewMovieRow = createMovieRowContainer({
  rowClass: AddMovieRow,
  mapStateToProps,
  mapDispatchToProps,
})

export default NewMovieRow;