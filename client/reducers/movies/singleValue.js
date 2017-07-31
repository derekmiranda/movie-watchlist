import Immutable from 'seamless-immutable';
import { TOGGLE_SINGLE_VALUE_EDITING } from '../../actions/types';

const initState = Immutable({
  editing: true,
  value: '',
})

const singleValue = (state = initState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default singleValue;