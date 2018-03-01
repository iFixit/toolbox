import React from 'react';
import renderer from 'react-test-renderer';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

test('renders without crashing', () => {
   const tree = renderer.create(<ButtonGroup />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders when disabled', () => {
   const tree = renderer
      .create(
         <ButtonGroup disabled>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
         </ButtonGroup>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
