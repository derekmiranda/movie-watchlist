import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Row from '../Row';
import Cell from '../Cell';

test('should render a tr', t => {
  const emptyHeaderWrap = shallow(<Row />);
  const trWrap = emptyHeaderWrap.find('tr');
  t.is(trWrap.length, 1);
})

test('should render a Cell for each passed in item', t => {
  const values = ['something', 'another', 'thing'];
  const filledHeaderWrap = shallow(<Row values={values}/>);
  const cellWrap = filledHeaderWrap.find(Cell);
  t.is(cellWrap.length, values.length);
})