import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SearchInput from './SearchInput';

test('renders without crashing', () => {
   const tree = renderer.create(<SearchInput />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('renders when disabled', () => {
   const tree = renderer.create(<SearchInput disabled />).toJSON();
   expect(tree).toMatchSnapshot();
});

test('calls onChange when input value changes', () => {
   const handleChange = jest.fn();
   const wrapper = mount(<SearchInput onChange={handleChange} />);
   wrapper.find('input').simulate('change', { target: { value: 'test' } });
   expect(handleChange).toHaveBeenCalledTimes(1);
});
