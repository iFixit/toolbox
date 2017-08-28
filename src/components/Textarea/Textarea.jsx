import React from 'react';
import PropTypes from 'prop-types';

import TextareaTextField from '../../internal/TextareaTextField';

const Textarea = props => (
   <TextareaTextField component="Textarea" {...props} />
);

Textarea.propTypes = {
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the form control is not available for interaction. */
   disabled: PropTypes.bool,
   /** Represents a caption for the form control. */
   label: PropTypes.string,
   /** A hint to the user of what can be entered in the control. */
   placeholder: PropTypes.string,
   /** This prop specifies that the user must fill in a value before submitting a form. */
   required: PropTypes.bool,
   /** Sets whether an element is resizable, and if so, in which direction(s). */
   resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
   /** The number of visible text lines for the control. */
   rows: PropTypes.number,
   /** The value of the control. */
   value: PropTypes.string,
   /** Callback when focus is removed. */
   onBlur: PropTypes.func,
   /** Callback when value is changed. */
   onChange: PropTypes.func,
   /** Callback when control is focused. */
   onFocus: PropTypes.func,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

Textarea.defaultProps = {
   className: '',
   disabled: false,
   label: '',
   placeholder: '',
   required: false,
   resize: 'vertical',
   rows: 3,
   value: '',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default Textarea;
