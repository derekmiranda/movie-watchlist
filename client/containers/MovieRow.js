import createMovieRowContainer from './createMovieRowContainer';
import UpdateMovieRow from '../components/UpdateMovieRow';
import { updateValue } from '../actions/creators';

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
})

const MovieRow = createMovieRowContainer({
  rowClass: UpdateMovieRow,
  mapStateToProps,
  mapDispatchToProps,
})

export default MovieRow;