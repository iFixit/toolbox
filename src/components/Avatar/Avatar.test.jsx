import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

test('renders without crashing', () => {
   const tree = renderer
      .create(<Avatar src="http://via.placeholder.com/100x100" />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom size (number)', () => {
   const tree = renderer
      .create(<Avatar src="http://via.placeholder.com/100x100" size={32} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom size (string)', () => {
   const tree = renderer
      .create(<Avatar src="http://via.placeholder.com/100x100" size="4rem" />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
