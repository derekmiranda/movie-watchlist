import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Cell from '../Cell';

test('should render a td', t => {
  const cellWrap = shallow(<Cell />);
  const tdWrap = cellWrap.find('td');
  t.is(tdWrap.length, 1);
})

test('should render passed-in component', t => {
  const cellWrap = shallow(
    <Cell>
      <p>Herp</p>
      <div>Derp</div>
    </Cell>
  );
  const children = cellWrap.children();
  t.is(children.length, 2);
  t.is(children.find('p').exists(), true);
  t.is(children.find('div').exists(), true);
})