import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Row from '../Row';
import Cell from '../Cell';

test('should render a tr', t => {
  const emptyRowWrap = shallow(<Row />);
  const trWrap = emptyRowWrap.find('tr');
  t.is(trWrap.length, 1);
})

test('should render a Cell for each passed in item', t => {
  const values = ['something', 'another', 'thing'];
  const filledRowWrap = shallow(<Row values={values}/>);
  const cellWrap = filledRowWrap.find(Cell);
  t.is(cellWrap.length, values.length);
})