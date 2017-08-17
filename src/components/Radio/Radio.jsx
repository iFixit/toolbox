import React from 'react';
import PropTypes from 'prop-types';

import CheckboxRadio from '../CheckboxRadio/CheckboxRadio';

const Radio = props => <CheckboxRadio type="radio" {...props} />;

Radio.propTypes = {
   /** Radio is selected. */
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

Radio.defaultProps = {
   checked: false,
   className: '',
   disabled: false,
   label: '',
   value: 'on',
   onChange: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default Radio;
