import createMovieRowContainer from './createMovieRowContainer';
import AddMovieRow from '../components/AddMovieRow';
import { editNewMovieValue, createNewMovie } from '../actions/creators';
import { validNewMovie } from '../reducers/newMovie';

const mapStateToProps = (state) => ({
  obj: state.newMovie,
  isValid: validNewMovie(state),
})

const mapDispatchToProps = (dispatch) => ({
  editNewMovieValue: (field, value) => dispatch(editNewMovieValue(field, value)),
  submitNewMovie: (movie) => dispatch(createNewMovie(movie)),
})

const NewMovieRow = createMovieRowContainer({
  rowClass: AddMovieRow,
  mapStateToProps,
  mapDispatchToProps,
})

export default NewMovieRow;