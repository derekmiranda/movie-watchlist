import createMovieRowContainer from './createMovieRowContainer';
import UpdateMovieRow from '../components/UpdateMovieRow';
import { updateValue, requestDeleteMovie } from '../actions/creators';

const mapStateToProps = (state, { idx }) => ({
  obj: state.movies[idx],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateValue: (field, value) => (
    dispatch(updateValue({
      movieIdx: ownProps.idx,
      field,
      value
    })
  )),
  deleteMovie: (movie, idx) => dispatch(requestDeleteMovie(movie, idx)),
})

const MovieRow = createMovieRowContainer({
  rowClass: UpdateMovieRow,
  mapStateToProps,
  mapDispatchToProps,
})

export default MovieRow;