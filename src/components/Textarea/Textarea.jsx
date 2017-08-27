import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import constants from '../../constants';
import domProps from '../../internal/domProps';

const { borderRadius, color, fontSize, lineHeight, spacing } = constants;

const Label = glamorous.label({
   display: 'inline-block',
   width: '100%',
   fontSize: fontSize[2],
   color: color.grayAlpha[9],
});

const LabelText = glamorous.span({
   display: 'inline-block',
   marginBottom: spacing[3],
   lineHeight: lineHeight.solid,
});

const TextareaContainer = glamorous('textarea', { forwardProps: 'onInvalid' })(
   {
      boxSizing: 'border-box',
      width: '100%',
      margin: 0,
      padding: `${spacing[2]} ${spacing[3]}`,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      boxShadow: 'none',
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
   },
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 1px ${color.blue[4]}`,
   },
   ({ resize }) => ({
      resize,
   }),
   ({ showInvalid }) => showInvalid && {
      color: color.red[4],
      backgroundColor: color.red[1],
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
);

class Textarea extends React.Component {
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
         showInvalid,
         ...props
      } = this.props || this.state;

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
               <TextareaContainer
                  {...props}
                  {...{ showInvalid }}
                  onChange={ev => onChange({ value: ev.target.value })}
                  onInvalid={ev => {
                     ev.preventDefault();
                     this.setState({ showInvalid: true });
                  }}
                  innerRef={props.domProps.setRef}
               />
            </domProps.Target>
         </Label>
      );
   }
}

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

export default domProps(Textarea);
