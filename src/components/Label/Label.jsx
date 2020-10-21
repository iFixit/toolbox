import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import constants from '../../constants';

const { spacing, fontSize, lineHeight, color, borderRadius } = constants;

const LabelContainer = styled.span(props => ({
   display: 'inline-block',
   padding: `${spacing[0]} ${spacing[1]}`,
   fontSize: fontSize[0],
   fontWeight: 700,
   lineHeight: lineHeight.title,
   textTransform: 'uppercase',
   color: props.color,
   backgroundColor: props.background,
   borderRadius,
   boxShadow: `inset 0 0 0 1px ${color.grayAlpha[3]}`,
}));

const Label = props => <LabelContainer {...props} />;

Label.propTypes = {
   /** Set the label background color. */
   background: string,
   /** Set the label text color. */
   color: string,
};

Label.defaultProps = {
   background: color.blue[4],
   color: color.white,
};

export default Label;
