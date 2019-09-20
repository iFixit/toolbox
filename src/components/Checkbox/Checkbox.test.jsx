import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

test('renders without crashing', () => {
   const tree = renderer.create(<Checkbox />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with label', () => {
   const tree = renderer.create(<Checkbox label="Test Label" />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with children', () => {
   const tree = renderer
      .create(
         <Checkbox>
            Normal Text
            <strong>Strong</strong>
         </Checkbox>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with custom margin', () => {
   const tree = renderer
      .create(<Checkbox label="Test Label" labelMargin="100px" />)
      .toJSON();
   expect(tree).toMatchSnapshot();
});
