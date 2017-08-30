import React from 'react';
import glamorous from 'glamorous';

import constants from '../constants';
import domProps from './domProps';

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
   ({ resize }) => resize && {
      resize,
   },
);

const TextareaContainer = Input.withComponent('textarea');

class TextareaTextField extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = { showInvalid: false };
   }

   componentDidUpdate() {
      if (this.state.showInvalid && this.props.domProps.valid) {
         this.setState({ showInvalid: false });
      }
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
            {label !== '' &&
               <LabelText> {label} </LabelText>
            }
            {props.showInvalid && props.domProps.focus &&
               <LabelText> {props.domProps.validationMessage} </LabelText>
            }
            <domProps.Target>
               <Component
                  {...props}
                  onInvalid={ev => {
                     ev.preventDefault();
                     this.setState({ showInvalid: true });
                  }}
                  onChange={({ target: { value } }) => onChange({ value })}
                  innerRef={props.domProps.setRef}
               />
            </domProps.Target>
         </Label>
      );
   }
}

export default domProps(TextareaTextField);
