import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TableBody from '../TableBody';

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