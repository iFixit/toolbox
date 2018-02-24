import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

test('renders without crashing', () => {
   const tree = renderer.create(<Icon name="square" />).toJSON();
   expect(tree).toMatchSnapshot();
});
