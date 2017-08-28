import { connect } from 'react-redux';
import AddMovieRow from '../components/AddMovieRow';

function createMovieRowContainer({ rowClass, mapStateToProps, mapDispatchToProps }) {
  const mapStateToPropsWithFields = (state, ownProps) => ({
    ...mapStateToProps(state, ownProps),
    orderedFields: ownProps.orderedFields,
  })
  
  const MovieRow = connect(mapStateToPropsWithFields, mapDispatchToProps)(rowClass);
  return MovieRow;
}


export default createMovieRowContainer;