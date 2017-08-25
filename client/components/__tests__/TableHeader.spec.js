import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TableHeader from '../TableHeader';
import Row from '../Row';


const headerWrap = shallow(<TableHeader />);

test('TableHeader should render a thead', t => {
  const theadWrap = headerWrap.find('thead');
  t.is(theadWrap.length, 1);
})

test('TableHeader should render a Row', t => {
  const theadWrap = headerWrap.find(Row);
  t.is(theadWrap.length, 1);
})