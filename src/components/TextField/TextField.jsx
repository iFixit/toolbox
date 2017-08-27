import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import constants from '../../constants';
import domProps from '../../internal/domProps';

const { borderRadius, color, fontSize, lineHeight, spacing } = constants;

const Label = glamorous.label({
   display: 'inline-block',
   boxSizing: 'border-box',
   width: '100%',
   fontSize: fontSize[2],
   color: color.grayAlpha[9],
});

const LabelText = glamorous.span({
   display: 'inline-block',
   marginBottom: spacing[3],
   lineHeight: lineHeight.solid,
});

const Input = glamorous('input', { forwardProps: 'onInvalid' })(
   {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      padding: `${spacing[1]} ${spacing[3]}`,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
   },
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 1px ${color.blue[4]}`,
   },
   ({ showInvalid }) => showInvalid && {
      color: color.red[4],
      backgroundColor: color.red[1],
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
);

class TextField extends React.Component {
   constructor(props) {
      super(props);
      this.state = { showInvalid: false };
   }

   render() {
      const {
         className,
         label,
         onMouseEnter,
         onMouseLeave,
         onChange,
         ...props
      } = this.props;

      const { showInvalid } = props || this.state;

      return (
         <Label
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            {label !== '' &&
               <LabelText> {label} </LabelText>
            }
            {showInvalid &&
               <LabelText> {props.domProps.validationMessage} </LabelText>
            }
            <domProps.Target>
               <Input
                  {...props}
                  {...{ showInvalid }}
                  onInvalid={ev => {
                     ev.preventDefault();
                     this.setState({ showInvalid: true });
                  }}
                  onChange={ev => onChange({ value: ev.target.value })}
                  innerRef={props.domProps.setRef}
               />
            </domProps.Target>
         </Label>
      );
   }
}

TextField.propTypes = {
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
   /** The supported input types */
   type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'password',
      'tel',
      'search',
      'url',
      'date',
      'datetime-local',
      'month',
      'week',
      'time',
   ]),
   /** The value of the control. */
   value: PropTypes.string,
   /** Callback when focus is removed. */
   onBlur: PropTypes.func,
   /** Callback when value is changed. */
   onChange: PropTypes.func,
   /** Callback when input is focused. */
   onFocus: PropTypes.func,
   /** Callback when mouse enters component. */
   onMouseEnter: PropTypes.func,
   /** Callback when mouse leaves component. */
   onMouseLeave: PropTypes.func,
};

TextField.defaultProps = {
   className: '',
   disabled: false,
   label: '',
   placeholder: '',
   required: false,
   type: 'text',
   value: '',
   onBlur: () => {},
   onChange: () => {},
   onFocus: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default domProps(TextField);
