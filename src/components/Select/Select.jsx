import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ label, value }) => (
   <option
      {...{
         label,
         value,
      }}
   />
);

Option.defaultProps = {
   label: '',
   value: '',
};

Option.propTypes = {
   label: PropTypes.string,
   value: PropTypes.string,
};

const Select = props => (
   <select>
      {props.options.map(option => (
         <Option
            {...option}
            key={option.value}
         />
      ))}
   </select>
);

Select.defaultProps = {
   options: [],
};

Select.propTypes = {
   options: PropTypes.arrayOf(
      PropTypes.shape({
         label: PropTypes.string,
         value: PropTypes.string,
      }),
   ),
};

export default Select;
