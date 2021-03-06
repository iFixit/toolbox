import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import constants from '../../constants';

const { spacing, fontSize, lineHeight, color } = constants;

const PillBadgeContainer = styled.span(props => ({
   display: 'inline-block',
   padding: `0 ${spacing[1]}`,
   fontSize: fontSize[0],
   fontWeight: 700,
   lineHeight: lineHeight.copy,
   textTransform: 'uppercase',
   color: props.color,
   backgroundColor: props.background,
   borderRadius: 9999,
}));

const PillBadge = props => <PillBadgeContainer {...props} />;

PillBadge.propTypes = {
   /** Set the background color. */
   background: string,
   /** Set the text color. */
   color: string,
};

PillBadge.defaultProps = {
   background: color.grayAlpha[2],
   color: color.grayAlpha[6],
};

export default PillBadge;
