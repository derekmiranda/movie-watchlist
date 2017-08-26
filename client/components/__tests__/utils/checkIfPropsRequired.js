import test from 'ava';
import { shallow } from 'enzyme';

const reqPropsMacro = (t, renderFn, prop) => {
  t.throws(renderFn, `Should warn about absence of ${prop}`);
}

reqPropsMacro.title = (providedTitle, _, prop) => {
  const prefix = providedTitle && providedTitle + ':';
  return `${prefix} should require ${prop}`;
}

const checkIfPropsRequired = (elem, props) => {
  props.forEach(prop => {
    test(
      reqPropsMacro,
      () => shallow(elem),
      prop
    )
  }) 
}

export default checkIfPropsRequired;