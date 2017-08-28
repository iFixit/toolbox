import React from 'react';
import PropTypes from 'prop-types';

import CheckboxRadio from '../../internal/CheckboxRadio';

const Checkbox = props => <CheckboxRadio type="checkbox" {...props} />;

Checkbox.propTypes = {
   /** Checkbox is selected. */
   checked: PropTypes.bool,
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the form control is not available for interaction. */
   disabled: PropTypes.bool,
   /** Represents a caption for the form control. */
   label: PropTypes.string,
   /** The value of the control. */
   value: PropTypes.string,
   /** Callback when the control is toggled. */
   onChange: PropTypes.func,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

Checkbox.defaultProps = {
   checked: false,
   className: '',
   disabled: false,
   label: '',
   value: 'on',
   onChange: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default Checkbox;
