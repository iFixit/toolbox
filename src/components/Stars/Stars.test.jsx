import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Stars from './Stars';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
   const tree = renderer.create(<Stars rating={3.5} />).toJSON();

   // A random id is set each time Stars instantiates (a quirk by the developer
   // of the repo), which causes our tests to fail. We null them out here that
   // way each time the test is run, the id won't get checked and the test will
   // pass.
   tree.children[0].children[0].children[0].props.id = null;
   tree.children[4].children[0].children[0].props.style.fill = null;

   expect(tree).toMatchSnapshot();
});
