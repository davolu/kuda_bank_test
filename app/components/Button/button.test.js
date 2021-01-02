import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';
import ButtonComponent from './button.index';

it('renders correctly', () => {
  const tree = renderer  
    .create(<ButtonComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});