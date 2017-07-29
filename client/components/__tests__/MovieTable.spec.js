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

test('Table has a header with correct fields', t => {
  const { wrapper } = t.context;
  const tableRows = wrapper.find('tr');
  const numRows = tableRows.length;
  t.truthy(numRows >= 1, 'No table header');

  const tableHead = tableRows.first();
  const expectedFields = ['Title', 'Director', 'Actors', 'Tags', 'Notes'];
  const headerFields = tableHead.children();

  t.is(expectedFields.length, headerFields.length, 'Not enough header fields');
  headerFields.forEach((field, i) => {
    const fieldText = field.text();
    const expectedField = expectedFields[i];
    t.truthy(fieldText.includes(expectedField), `Expected ${field} in header`);
  })
})