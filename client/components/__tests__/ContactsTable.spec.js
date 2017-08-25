import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import ContactsTable from '../ContactsTable';
import TableHeader from '../TableHeader';

const btnWrap = shallow(<ContactsTable />);
const tableWrap = btnWrap.find('table');

test('should render a table', t => {
  t.is(tableWrap.length, 1);
})

test('should render a TableHeader', t => {
  const tableHeader = tableWrap.find(TableHeader);
  t.is(tableHeader.length, 1);
})