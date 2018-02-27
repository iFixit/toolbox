import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';

test('renders without crashing', () => {
   const tree = renderer.create(<Label>Test</Label>).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom text color and background color', () => {
   const tree = renderer
      .create(
         <Label color="#C27E00" background="#FEF5D9">
            Test
         </Label>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
