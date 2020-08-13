import React from 'react';

import renderer from 'react-test-renderer';

import SignUp from '../SignUp';

test('it renders all inputs as expected', () => {
  const tree = renderer.create(<SignUp />).toJSON();
  expect(tree).toMatchSnapshot();
});
