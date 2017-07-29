import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import MovieTable from '../MovieTable';

test.beforeEach(t => {
  t.context.wrapper = shallow(<App />);
})

test('App renders properly', t => {
  const { wrapper } = t.context;
  t.is(wrapper.length, 1);
})

test('App renders MovieTable', t => {
  const { wrapper } = t.context;
  t.is(wrapper.find(MovieTable).length, 1);
})