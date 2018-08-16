import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stars from './Stars';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
   const tree = renderer.create(<Stars rating={3.5} />).toJSON();
   expect(tree).toMatchSnapshot();
});
