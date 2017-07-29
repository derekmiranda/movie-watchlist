import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import MovieTable from '../MovieTable';

test('It should render', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.length, 1);
})