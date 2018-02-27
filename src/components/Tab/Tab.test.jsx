import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

test('renders without crashing', () => {
   const tree = renderer.create(<Tab>Test</Tab>).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders when active', () => {
   const tree = renderer.create(<Tab active>Test</Tab>).toJSON();
   expect(tree).toMatchSnapshot();
});
