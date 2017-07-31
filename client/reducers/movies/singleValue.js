import Immutable from 'seamless-immutable';
import {
  RECEIVE_SINGLE_VALUE, CHANGE_SINGLE_VALUE, TOGGLE_SINGLE_VALUE_EDITING,
} from '../../actions/types';

const initState = Immutable({
  editing: true,
  value: '',
})

const singleValue = (state = initState, action = {}) => {
  switch (action.type) {
    case RECEIVE_SINGLE_VALUE:
      return Immutable({
        editing: false,
        value: action.value,
      });
    case CHANGE_SINGLE_VALUE:
      return state.set('value', action.value);
    case TOGGLE_SINGLE_VALUE_EDITING:
      const toggledEditing = !state.value || (state.editing ? false : true);
      return state.set('editing', toggledEditing);
    default:
      return state;
  }
}

export default singleValue;