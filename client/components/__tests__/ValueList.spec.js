import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ValueList from '../ValueList';

test.beforeEach(t => {
  t.context.shallowValueList = props => shallow(<ValueList {...props} />);
})

test('ValueList renders properly', t => {
  const { shallowValueList } = t.context;
  const wrapper = shallowValueList();
  t.is(wrapper.length, 1, 'ValueList not rendering');
})