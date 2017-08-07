import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
   borderRadius,
   color,
   fontSize,
   lineHeight,
   spacing,
} from '../../constants';

const Label = glamorous.label({
   display: 'inline-block',
   width: '100%',
   color: color.grayAlpha[9],
});

const LabelText = glamorous.span({
   display: 'inline-block',
   marginBottom: spacing[3],
   lineHeight: lineHeight.solid,
});

const TextareaContainer = glamorous.textarea(
   {
      boxSizing: 'border-box',
      width: '100%',
      fontFamily: 'inherit',
      fontSize: fontSize[2],
      border: `1px solid ${color.grayAlpha[3]}`,
      padding: `${spacing[2]} ${spacing[3]}`,
      lineHeight: lineHeight.copy,
      margin: 0,
      borderRadius,
      outline: 'none',
      ':focus': {
         borderColor: color.blue[4],
         boxShadow: `0 0 0 1px ${color.blue[4]}`,
      },
   },
   ({ resize }) => ({
      resize,
   }),
   ({ disabled }) => ({
      color: disabled ? color.grayAlpha[5] : color.grayAlpha[9],
      backgroundColor: disabled ? color.grayAlpha[1] : color.white,
   }),
);

const Textarea = ({ label, children, ...props }) =>
  <Label>
    {label !== '' &&
    <LabelText>
      {label}
    </LabelText>}
    <TextareaContainer {...props}>
      {children}
    </TextareaContainer>
  </Label>;

Textarea.propTypes = {
   children: PropTypes.string,
   disabled: PropTypes.bool,
   label: PropTypes.string,
   placeholder: PropTypes.string,
   /** The number of visible text lines */
   required: PropTypes.bool,
   resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
   rows: PropTypes.number,
};

Textarea.defaultProps = {
   children: '',
   disabled: false,
   label: '',
   placeholder: '',
   rows: 3,
   required: false,
   resize: 'vertical',
};

export default Textarea;
