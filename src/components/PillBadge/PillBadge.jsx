import React from 'react';
import { string } from 'prop-types';
import glamorous from 'glamorous';
import constants from '../../constants';

const { spacing, fontSize, lineHeight, color } = constants;

const PillBadgeContainer = glamorous.span(props => ({
   display: 'inline-block',
   padding: `${spacing[0]} ${spacing[1]}`,
   fontSize: fontSize[0],
   fontWeight: 700,
   lineHeight: lineHeight.none,
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
   background: color.grayAlpha[1],
   color: color.grayAlpha[6],
};

export default PillBadge;
