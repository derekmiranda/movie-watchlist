import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import MovieTable from '../MovieTable';

test.beforeEach(t => {
  t.context.wrapper = shallow(<MovieTable />);
})

test('MovieTable renders properly', t => {
  const { wrapper } = t.context;
  t.is(wrapper.length, 1);
})

test('MovieTable renders a table', t => {
  const { wrapper } = t.context;
  t.is(wrapper.find('table').length, 1);
})