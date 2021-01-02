import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';
import HeaderComponent from './button.index';

it('renders correctly', () => {
  const tree = renderer  
    .create(<HeaderComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});