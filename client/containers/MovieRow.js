import createMovieRowContainer from './createMovieRowContainer';
import InputRow from '../components/InputRow';
import { updateValue } from '../actions/creators';

const mapStateToProps = (state, { idx }) => ({
  obj: state.movies[idx],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeValue: (field, value) => (
    dispatch(updateValue({
      movieIdx: ownProps.idx,
      field,
      value
    })
  )),
})

const MovieRow = createMovieRowContainer({
  rowClass: InputRow,
  mapStateToProps,
  mapDispatchToProps,
})

export default MovieRow;