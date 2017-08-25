import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Table from '../Table';
import TableHeader from '../TableHeader';

const btnWrap = shallow(<Table />);
const tableWrap = btnWrap.find('table');

test('should render a table', t => {
  t.is(tableWrap.length, 1);
})

test('should render a TableHeader', t => {
  const tableHeader = tableWrap.find(TableHeader);
  t.is(tableHeader.length, 1);
})