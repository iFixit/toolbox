import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import domProps from './domProps';
import InvalidIcon from './InvalidIcon';

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
      WebkitAppearance: 'none',
      width: '100%',
      boxSizing: 'border-box',
      padding: `${spacing[1]} ${spacing[3]}`,
      margin: 0,
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      lineHeight: lineHeight.copy,
      border: `1px solid ${color.grayAlpha[3]}`,
      borderRadius,
      boxShadow: 'none',
      outline: 'none',
      color: color.grayAlpha[9],
      backgroundColor: color.white,
      paddingLeft: '40px',
   },
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 1px ${color.blue[4]}`,
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
      backgroundColor: color.grayAlpha[1],
   },
   ({ resize }) => resize && {
      resize,
   },
);

const TextareaContainer = Input.withComponent('textarea');

class TextareaTextField extends React.PureComponent {
   state = {};

   componentDidUpdate = () => {
      if (this.state.showInvalid && this.props.domProps.valid) {
         this.setState({ showInvalid: false });
      }
   };

   InvalidIconOnClick = () => {
      this.setState(({ showValidationMessage = false }) => ({
         showValidationMessage: !showValidationMessage,
      }));
   }

   ComponentOnInvalid = ev => {
      ev.preventDefault();
      this.setState({ showInvalid: true });
   }

   render() {
      const {
         className,
         label,
         onMouseEnter,
         onMouseLeave,
         onChange,
         component,
         ...props
      } = { ...this.state, ...this.props };

      const Component = component === 'TextField' ? Input : TextareaContainer;

      return (
         <Label
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            {label !== '' && !props.showValidationMessage &&
               <LabelText> {label} </LabelText>
            }
            {props.showValidationMessage &&
               <LabelText style={{ color: color.red[4] }}> {props.domProps.validationMessage} </LabelText>
            }
            <glamorous.Div position="relative">
               {true && <InvalidIcon onClick={this.InvalidIconOnClick} />}
               <domProps.Target>
                  <Component
                     {...props}
                     onInvalid={this.ComponentOnInvalid}
                     onChange={({ target: { value } }) => onChange({ value })}
                     innerRef={props.domProps.setRef}
                  />
               </domProps.Target>
            </glamorous.Div>
         </Label>
      );
   }
}

export default domProps(TextareaTextField);
