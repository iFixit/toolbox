import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

test('renders without crashing', () => {
   const tree = renderer.create(<Icon name="square" />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom color, size and stroke width', () => {
   const tree = renderer
      .create(<Icon name="home" color="#f00" size={16} strokeWidth={1} />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
