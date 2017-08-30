import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TableBody from '../TableBody';
import MovieRow from '../../containers/MovieRow';

const emptyBodyCtx = () => {
  const orderedFields = ['a', 'b', 'c'];
  return {
    orderedFields,
    emptyBodyWrap: shallow(<TableBody orderedFields={orderedFields} objs={[]} />),
  }
}

const filledBodyCtx = () => {
  const fields = ['a', 'b', 'c'];
  const objs = [{ name: 'Bill', title: 'Guy' }];
  const bodyWrap = shallow(<TableBody orderedFields={fields} objs={objs} />);
  return {
    fields,
    bodyWrap,
    objs,
  }
}

test('should at least render a tbody', t => {
  const { emptyBodyWrap } = emptyBodyCtx();
  const tbodyWrap = emptyBodyWrap.find('tbody');
  t.is(tbodyWrap.length, 1);
})

test('should render an MovieRow for each obj', t => {
  const { objs, bodyWrap } = filledBodyCtx();
  const rowWrap = bodyWrap.find(MovieRow);
  t.is(rowWrap.length, objs.length);
})