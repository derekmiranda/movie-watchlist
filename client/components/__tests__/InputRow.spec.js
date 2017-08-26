import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import InputRow from '../InputRow';
import Row from '../Row';

const fields = ['title', 'director', 'genres'];
const values = ['Taxi Driver', 'Martin Scorsese', 'Comedy'];

test('should have a Row', t => {
  const wrapper = shallow(<InputRow fields={fields} values={values} />);
  const rowWrap = wrapper.find(Row);
  t.is(rowWrap.length, 1);
})

test.todo('should have an input for every field');