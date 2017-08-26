import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import InputRow from '../InputRow';
import Row from '../Row';

const fields = ['title', 'director', 'genres'];

test.before(t => {
  sinon.stub(console, 'error').throws(function() { return new Error() });
})

test('should have a Row', t => {
  const wrapper = shallow(<InputRow fields={fields} />);
  const rowWrap = wrapper.find(Row);
  t.is(rowWrap.length, 1);
})

test('requires fields array', t => {
  const fn = () => shallow(<InputRow />);
  t.throws(fn, 'Should warn about absence of fields');
})

test.after(t => {
  sinon.stub(console, 'error').restore();
})

test.todo('should have an input for every field');