import React from 'react';
import PropTypes from 'prop-types';

import CheckboxRadio from '../../internal/CheckboxRadio';

const Checkbox = ({ children, ...props }) => (
   <CheckboxRadio type="checkbox" {...props}>
      {children}
   </CheckboxRadio>
);

Checkbox.propTypes = {
   /** Checkbox is selected. */
   checked: PropTypes.bool,
   /** Children will supercede the label if provided. */
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
   ]),
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the form control is not available for interaction. */
   disabled: PropTypes.bool,
   /** Represents a caption for the form control. */
   label: PropTypes.string,
   /** Override default label margin */
   labelMargin: PropTypes.string,
   /** The value of the control. */
   value: PropTypes.string,
   /** Callback when focus is removed. */
   onBlur: PropTypes.func,
   /** Callback when the control is toggled. */
   onChange: PropTypes.func,
   /** Callback when control is focused. */
   onFocus: PropTypes.func,
   /** Callback when the control is invalid. */
   onInvalid: PropTypes.func,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

Checkbox.defaultProps = {
   checked: false,
   children: null,
   className: '',
   disabled: false,
   label: '',
   labelMargin: null,
   value: 'on',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onInvalid: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default Checkbox;
