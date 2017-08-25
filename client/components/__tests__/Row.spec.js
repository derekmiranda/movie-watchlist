import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Row from '../Row';

test('should render a tr', t => {
  const emptyHeaderWrap = shallow(<Row />);
  const trWrap = emptyHeaderWrap.find('tr');
  t.is(trWrap.length, 1);
  t.falsy(true)
})

test('should render a td for each passed in item', t => {
  const values = ['something', 'another', 'thing'];
  const filledHeaderWrap = shallow(<Row values={values}/>);
  const tdWrap = filledHeaderWrap.find('td');
  t.is(tdWrap.length, values.length);
})