import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TableBody from '../TableBody';
import Row from '../Row';

const emptyBodyCtx = () => {
  const fields = ['a', 'b', 'c'];
  return {
    fields,
    emptyBodyWrap: shallow(<TableBody fields={fields}/>),
  }
}

test('should at least render a tbody', t => {
  const { emptyBodyWrap } = emptyBodyCtx();
  const tbodyWrap = emptyBodyWrap.find('tbody');
  t.is(tbodyWrap.length, 1);
})

test('should at least render an empty row with given row length', t => {
  const { emptyBodyWrap, fields } = emptyBodyCtx();
  const firstRow = emptyBodyWrap.find(Row).first();
  const cells = firstRow.shallow('tr').children();
  t.is(firstRow.length, 1);
  t.is(cells.length, fields.length);
})

test('should render Rows for each passed-in row', t => {
  const createRow = () => ['a', 'b', 'c'];
  const rows = new Array(3).fill(createRow());
  const bodyWrap = shallow(<TableBody fields={createRow()} rows={rows} />);
  const rowWrap = bodyWrap.find(Row);
  t.is(rowWrap.length, rows.length);
})