import React from 'react';
import renderer from 'react-test-renderer';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';

test('renders without crashing', () => {
   const tree = renderer
      .create(
         <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
         </ButtonGroup>,
      )
      .toJSON();
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

test('renders with disabled children', () => {
   const tree = renderer
      .create(
         <ButtonGroup>
            <Button disabled>Button 1</Button>
            <Button>Button 2</Button>
         </ButtonGroup>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with non-button children', () => {
   const tree = renderer
      .create(
         <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <span>Span</span>
         </ButtonGroup>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders as column', () => {
   const tree = renderer
      .create(
         <ButtonGroup direction="column">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
         </ButtonGroup>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
