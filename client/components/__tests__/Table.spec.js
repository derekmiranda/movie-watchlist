import React from 'react';
import test from 'ava';
import { shallow, mount } from 'enzyme';
import Table from '../Table';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

const fields = ['name', 'title'];
const wrapper = shallow(<Table labels={fields} orderedFields={fields}/>);
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

test('should pass TableBody orderedFields and objs', t => {
  const objs = [{ name: 'Bill', title: 'Guy' }];
  const filledTable = shallow(
    <Table
      orderedFields={fields}
      labels={fields}
      objs={objs}
    />
  )
  const bodyWrap = filledTable.find(TableBody);
  const bodyProps = bodyWrap.props();
  const bodyObjs = bodyProps.objs;
  const bodyOrderedFields = bodyProps.orderedFields;
  t.deepEqual(bodyObjs, objs);
  t.deepEqual(bodyOrderedFields, fields);
})