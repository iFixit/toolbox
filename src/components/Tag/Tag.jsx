import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
   color,
   spacing,
   fontSize,
   borderRadius,
   lineHeight,
} from '../../constants';
import Icon from '../Icon/Icon';

const TagContainer = glamorous.span({
   display: 'inline-flex',
   alignItems: 'stretch',
   padding: 0,
   fontFamily: 'inherit',
   fontSize: fontSize[1],
   lineHeight: lineHeight.copy,
   color: color.white,
   backgroundColor: color.blue[4],
   border: 'none',
   borderRadius,
   overflow: 'hidden',
});

const TagText = glamorous.span({
   padding: `${spacing[0]} ${spacing[0]} ${spacing[0]} ${spacing[1]}`,
});

const TagRemove = glamorous.button({
   padding: spacing[0],
   lineHeight: 0,
   color: color.white,
   backgroundColor: 'transparent',
   border: 'none',
   cursor: 'pointer',
   outline: 'none',
   '&:hover': {
      backgroundColor: color.grayAlpha[3],
   },
   '&:focus': {
      backgroundColor: color.grayAlpha[5],
   },
});

const Tag = props =>
  <TagContainer className={props.className}>
    <TagText>
      {props.children}
    </TagText>
    <TagRemove onClick={props.onRemove}>
      <Icon name="x" size={16} />
    </TagRemove>
  </TagContainer>;

Tag.propTypes = {
   /** Content to display in the tag */
   children: PropTypes.string.isRequired,
   className: PropTypes.string,
   /** Callback when tag is removed */
   onRemove: PropTypes.func,
};

Tag.defaultProps = {
   className: '',
   onRemove: () => {},
};

export default Tag;
