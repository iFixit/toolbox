import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Radio from '../Radio/Radio';

import { color, fontSize, spacing } from '../../constants';

const FieldSet = glamorous.fieldset({
   margin: 0,
   padding: 0,
   fontSize: fontSize[2],
   color: color.grayAlpha[9],
   border: 'none',
});

const Legend = glamorous.legend({
   padding: 0,
   marginBottom: spacing[3],
});

const RadioContainer = glamorous(Radio)({
   '&:not(:last-of-type)': {
      marginBottom: spacing[1],
   },
});

const RadioGroup = ({ className, label, value, disabled, onChange, radios }) =>
  <FieldSet className={className}>
    {label !== '' &&
    <Legend>
      {label}
    </Legend>}
    {radios.map(({ ...radio }) =>
      <RadioContainer
        key={radio.value}
        checked={radio.value === value}
        disabled={disabled}
        onChange={onChange}
        {...radio}
      />,
      )}
  </FieldSet>;

RadioGroup.propTypes = {
   /** Array of radios. */
   radios: PropTypes.arrayOf(
      PropTypes.shape({
         label: PropTypes.string,
         value: PropTypes.string,
         disabled: PropTypes.bool,
      }),
   ).isRequired,
   /** Set class name of containing element. */
   className: PropTypes.string,
   /** Indicates that the form control is not available for interaction. */
   disabled: PropTypes.bool,
   /** Title of radio group. */
   label: PropTypes.string,
   /** Corresponds to the value of the selected radio. */
   value: PropTypes.string,
   /** Callback when any radio is toggled. */
   onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
   className: '',
   disabled: false,
   label: '',
   value: '',
   onChange: () => {},
};

export default RadioGroup;
