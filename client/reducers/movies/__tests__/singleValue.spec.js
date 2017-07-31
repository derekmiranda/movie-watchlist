import test from 'ava';
import Immutable from 'seamless-immutable';
import singleValue from '../singleValue';
import {
  receiveSingleValue, changeSingleValue, toggleSingleValueEditing,
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

test('Can toggle value editing status', t => {
  const toggleAction = toggleSingleValueEditing();
  const expectedEditing = sampleObj.editing ? false : true;

  const initVal = singleValue(undefined, receiveSingleValue(sampleStr));
  const actualToggledVal = singleValue(initVal, toggleAction);

  t.is(expectedEditing, actualToggledVal.editing);
});

test(`Can't toggle off empty value editing`, t => {
  const initVal = singleValue();
  const toggleAction = toggleSingleValueEditing();
  const actualToggledVal = singleValue(initVal, toggleAction);

  t.truthy(actualToggledVal.editing, 'Should still be editable if no value');
});