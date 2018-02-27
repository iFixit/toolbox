import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SearchBox from './SearchBox';

test('renders without crashing', () => {
   const tree = renderer.create(<SearchBox />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders when disabled', () => {
   const tree = renderer.create(<SearchBox disabled />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('calls onChange when input value changes', () => {
   const handleChange = jest.fn();
   const wrapper = mount(<SearchBox onChange={handleChange} />);
   wrapper.find('input').simulate('change', { target: { value: 'test' } });
   expect(handleChange).toHaveBeenCalledTimes(1);
});
