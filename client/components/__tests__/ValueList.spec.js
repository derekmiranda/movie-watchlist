import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import ValueList from '../ValueList';
import EditableValue from '../EditableValue';

test.beforeEach(t => {
  t.context.shallowValueList = props => shallow(<ValueList {...props} />);
})

test('ValueList renders properly', t => {
  const { shallowValueList } = t.context;
  const wrapper = shallowValueList();
  t.is(wrapper.length, 1, 'ValueList not rendering');
})

test('Has one default empty EditableValue w/ no passed-in values', t => {
  const { shallowValueList } = t.context;
  const wrapper = shallowValueList();
  const defaultEditable = wrapper.find(EditableValue);

  t.truthy(defaultEditable.exists(), 'Exactly one EditableValue not rendered');
  t.falsy(defaultEditable.prop('value'), 'Default EditableValue should have no values');
})

test('Renders passed in values as list items', t => {
  const { shallowValueList } = t.context;
  const values = ['Scorsese', 'P.T. Anderson']
  const wrapper = shallowValueList({ values });

  const valuesWrap = wrapper.find(EditableValue);
  t.is(valuesWrap.length, values.length + 1, 'Incorrect amount of values rendered');
});

test.todo('Clicking on value switches it w/ text input');