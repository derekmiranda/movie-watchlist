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

const filledBodyCtx = () => {
  const createRow = () => ['a', 'b', 'c'];
  const rows = new Array(3).fill(createRow());
  const bodyWrap = shallow(<TableBody fields={createRow()} rows={rows} />);
  return {
    rows,
    bodyWrap,
  }
}

test('should at least render a tbody', t => {
  const { emptyBodyWrap } = emptyBodyCtx();
  const tbodyWrap = emptyBodyWrap.find('tbody');
  t.is(tbodyWrap.length, 1);
})

test('should render Rows for each passed-in row', t => {
  const { rows, bodyWrap } = filledBodyCtx();
  const rowWrap = bodyWrap.find(Row);
  t.is(rowWrap.length, rows.length);
})

test('should pass Row its corresponding idx and obj w/in the list', t => {
  const { rows, bodyWrap } = filledBodyCtx();
  const rowWrap = bodyWrap.find(Row);
  rowWrap.forEach((row, idx) => {
    const rowIdx = row.props().idx;
    const rowObj = row.props().obj;
    t.is(idx, rowIdx);
    t.deepEqual(obj, rowObj);
  })
})