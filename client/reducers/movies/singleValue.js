import Immutable from 'seamless-immutable';
import {
  RECEIVE_SINGLE_VALUE, CHANGE_SINGLE_VALUE
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
      console.log(state);
      return state.set('value', action.value);
    default:
      return state;
  }
}

export default singleValue;