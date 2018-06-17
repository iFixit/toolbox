import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
   const tree = renderer.create(<Button>Test Button</Button>).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders when disabled', () => {
   const tree = renderer
      .create(<Button disabled>Disabled Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with default design', () => {
   const tree = renderer
      .create(<Button design="default">Default Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with primary design', () => {
   const tree = renderer
      .create(<Button design="primary">Primary Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with secondary design', () => {
   const tree = renderer
      .create(<Button design="secondary">Secondary Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with outline design', () => {
   const tree = renderer
      .create(<Button design="outline">Outline Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with plain design', () => {
   const tree = renderer
      .create(<Button design="plain">Plain Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with small size', () => {
   const tree = renderer
      .create(<Button size="small">Small Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with large size', () => {
   const tree = renderer
      .create(<Button size="large">Large Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders at fullWidth', () => {
   const tree = renderer
      .create(<Button fullWidth>Full Width Button</Button>)
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders with a when href is present', () => {
   const tree = renderer
      .create(
         <Button href="https://ifixit.com" target="_blank">
            Go to iFixit.com
         </Button>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});

test('calls onClick when button is clicked', () => {
   const handleClick = jest.fn();
   const wrapper = mount(
      <Button onClick={handleClick}>Clickable Button</Button>,
   );
   wrapper.find('button').simulate('click');
   expect(handleClick).toHaveBeenCalledTimes(1);
});
