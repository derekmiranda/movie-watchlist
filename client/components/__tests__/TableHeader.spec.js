import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import TableHeader from '../TableHeader';

const headerWrap = shallow(<TableHeader />);

test('should render a thead', t => {
  const theadWrap = headerWrap.find('thead');
  t.is(theadWrap.length, 1);
})