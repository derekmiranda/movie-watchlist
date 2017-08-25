import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const wrapper = shallow(<Table />);
const tableWrap = wrapper.find('table');

test('should render a table', t => {
  t.is(tableWrap.length, 1);
})

test('should render a TableHeader', t => {
  const tableHeader = tableWrap.find(TableHeader);
  t.is(tableHeader.length, 1);
})

test('should render a TableBody', t => {
  const tableBody = tableWrap.find(TableBody);
  t.is(tableBody.length, 1);
})