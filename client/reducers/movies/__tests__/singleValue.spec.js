import test from 'ava';
import Immutable from 'seamless-immutable';
import singleValue from '../singleValue';
import {
  receiveSingleValue, changeSingleValue,
} from '../../../actions/creators';

const sampleStr = 'Some value';

const initVal = {
  editing: true,
  value: '',
}

const sampleObj = {
  editing: false,
  value: sampleStr,
}

test('Initializes to correct object', t => {
  t.deepEqual(singleValue(), initVal);
})

test('Passed in values wrapped in singleValue object', t => {
  const receiveAction = receiveSingleValue(sampleStr);
  t.deepEqual(singleValue(undefined, receiveAction), sampleObj);
});