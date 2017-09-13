import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
   <select
      value={props.value}
      onChange={({ value }) => props.onChange(value)}
   >
      {props.options.map(option => (
         <option
            label={option.label}
            value={option.value}
            key={option.value}
         />
      ))}
   </select>
);

Select.defaultProps = {
   options: [],
   value: '',
   onChange: () => {},
};

Select.propTypes = {
   options: PropTypes.arrayOf(
      PropTypes.shape({
         label: PropTypes.string,
         value: PropTypes.string,
      }),
   ),
   value: PropTypes.string,
   onChange: PropTypes.func,
};

export default Select;
