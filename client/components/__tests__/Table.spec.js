import React from 'react';
import test from 'ava';
import { shallow, mount } from 'enzyme';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const fields = ['name', 'title'];
const emptyTableWrap = shallow(<Table labels={fields} orderedFields={fields} objs={[]}/>);
const tableWrap = emptyTableWrap.find('table');

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