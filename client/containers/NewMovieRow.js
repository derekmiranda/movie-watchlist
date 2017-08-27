import { connect } from 'react-redux';
import AddMovieRow from '../components/AddMovieRow';
import orderedFields from './orderedFields';
import { editNewMovieValue } from '../actions/creators';

const mapStateToProps = (state) => ({
  orderedFields,
  obj: state.newMovie,
})

const mapDispatchToProps = (dispatch) => ({
  editNewMovieValue: (field, value) => dispatch(editNewMovieValue(field, value)),
})

const NewMovieRow = connect(mapStateToProps, mapDispatchToProps)(AddMovieRow);

export default NewMovieRow;