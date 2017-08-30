import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import Icon from '../components/Icon/Icon';
import constants from '../constants';
import domProps from './domProps';

const {
   borderRadius,
   color,
   fontSize,
   lineHeight,
   spacing,
   transition,
} = constants;

const Label = glamorous.label(
   {
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      fontSize: fontSize[2],
      color: color.grayAlpha[9],
   },
   ({ disabled }) => disabled && {
      color: color.grayAlpha[5],
   },
);

// hide native checkbox element
const Input = glamorous('input', { forwardProps: 'onInvalid' })({
   clip: 'rect(1px, 1px, 1px, 1px)',
   height: 1,
   width: 1,
   overflow: 'hidden',
   position: 'absolute',
   whiteSpace: 'nowrap',
});

const LabelText = glamorous.span({
   marginLeft: spacing[3],
   lineHeight: lineHeight.title,
   userSelect: 'none',
});

const InputIcon = glamorous(Icon)(
   {
      boxSizing: 'content-box',
      width: 16,
      height: 16,
      lineHeight: 0,
      transition: `all ${transition.duration} ${transition.easing}`,
      color: 'transparent',
      backgroundColor: color.white,
      border: `1px solid ${color.grayAlpha[4]}`,
   },
   ({ type }) => ({
      borderRadius: type === 'checkbox' ? borderRadius : '50%',
   }),
   ({ domProps: { focus } }) => focus && {
      borderColor: color.blue[4],
      boxShadow: `0 0 0 3px ${color.blue[2]}`,
   },
   ({ checked }) => checked && {
      color: color.white,
      backgroundColor: color.blue[4],
      borderColor: color.blue[4],
   },
   ({ showInvalid }) => showInvalid && {
      borderColor: color.red[4],
      backgroundColor: color.red[1],
   },
   ({ disabled, checked }) => disabled && {
      backgroundColor: checked ? color.gray[4] : color.gray[1],
      borderColor: color.gray[4],
   },
);

class CheckboxRadio extends React.PureComponent {
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
         showInvalid,
         ...props
      } = { ...this.state, ...this.props };

      return (
         <Label
            className={className}
            disabled={props.disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
         >
            <domProps.Target>
               <Input
                  {...props}
                  innerRef={props.domProps.setRef}
                  onInvalid={ev => {
                     ev.preventDefault();
                     this.setState({ showInvalid: true });
                  }}
                  onChange={({ target: { checked, value } }) =>
                     onChange({ checked, value })
                  }
               />
            </domProps.Target>
            <InputIcon
               name={props.type === 'checkbox' ? 'check' : 'circle'}
               type={props.type}
               checked={props.checked}
               disabled={props.disabled}
               domProps={props.domProps}
               showInvalid={showInvalid}
            />
            {label !== '' &&
               <LabelText> {label} </LabelText>
            }
            {showInvalid && props.domProps.focus &&
               <LabelText> {props.domProps.validationMessage} </LabelText>
            }
         </Label>
      );
   }
}

CheckboxRadio.propTypes = {
   type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
   checked: PropTypes.bool,
   className: PropTypes.string,
   disabled: PropTypes.bool,
   label: PropTypes.string,
   value: PropTypes.string,
   onChange: PropTypes.func,
   onMouseEnter: PropTypes.func,
   onMouseLeave: PropTypes.func,
};

CheckboxRadio.defaultProps = {
   checked: false,
   className: '',
   disabled: false,
   label: '',
   value: 'on',
   onChange: () => {},
   onMouseEnter: () => {},
   onMouseLeave: () => {},
};

export default domProps(CheckboxRadio);
