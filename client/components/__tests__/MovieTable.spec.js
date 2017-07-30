import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import MovieTable from '../MovieTable';
import EditableValue from '../EditableValue';

test.beforeEach(t => {
  t.context.wrapper = shallow(<MovieTable />);
  t.context.expectedFields = ['Title', 'Director', 'Actors', 'Tags', 'Notes'];
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
  const { wrapper, expectedFields } = t.context;

  const tableHead = wrapper.find('tr.header');
  t.truthy(tableHead.exists(), 'No table header rendered');
  
  const headerFields = tableHead.children();

  t.is(expectedFields.length, headerFields.length, 'Not enough header fields');
  headerFields.forEach((field, i) => {
    const fieldText = field.text();
    const expectedField = expectedFields[i];
    t.truthy(fieldText.includes(expectedField), `Expected ${field} in header`);
  })
})

test('Table has row to input new values', t => {
  const { wrapper, expectedFields } = t.context;

  const inputRow = wrapper.find('tr.newMovie');
  t.truthy(inputRow.exists(), 'No input row');

  const fieldInputTypeMap = {
    Title: EditableValue,
    Director: EditableValue,
    Notes: EditableValue,
  }

  const singleValCells = inputRow.children('td');
  t.is(singleValCells.length, expectedFields.length, 'Not enough input cells');

  expectedFields.forEach((field, idx) => {
    const inputType = fieldInputTypeMap[field];
    if (!inputType) {
      return;
    }

    const inputCell = singleValCells.at(idx);
    const input = inputCell.find(inputType);
    t.truthy(input.exists(), `Correct input for ${field} doesn't exist`);
  })
})