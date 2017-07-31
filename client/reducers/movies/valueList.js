import Immutable from 'seamless-immutable';
import singleValue from './singleValue';
import { TOGGLE_SINGLE_VALUE_EDITING } from '../../actions/types';

const valueList = (state = Immutable([]), action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default valueList;