import {
  FETCH_STARTED,
  FETCH_SUCCEEDED,
  FETCH_FAILED
} from '../actions/types';

const fetching = (state = false, action = {}) => {
  switch (action.type) {
    case FETCH_STARTED: {
      return true;
    }
    case FETCH_SUCCEEDED:
    case FETCH_FAILED: {
      return false;
    }
    default:
      return state
  }
}

export default fetching;