import React from 'react';
import renderer from 'react-test-renderer';
import PillBadge from './PillBadge';

test('renders without crashing', () => {
   const tree = renderer.create(<PillBadge>Test</PillBadge>).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom text color and background color', () => {
   const tree = renderer
      .create(
         <PillBadge color="#C27E00" background="#FEF5D9">
            Test
         </PillBadge>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
