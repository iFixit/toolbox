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

const TagContainer = glamorous.button({
  display: 'inline-flex',
  alignItems: 'center',
  padding: 0,
  fontFamily: 'inherit',
  fontSize: fontSize[1],
  lineHeight: lineHeight.copy,
  color: color.white,
  backgroundColor: color.blue[4],
  border: 'none',
  borderRadius,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: color.blue[5],
  },
});

const TagText = glamorous.span({
  padding: `${spacing[0]} ${spacing[1]}`,
});

const TagIcon = glamorous(Icon)({
  padding: `${spacing[0]} ${spacing[0]} ${spacing[0]} 0`,
});

const Tag = props =>
  <TagContainer onClick={props.onRemove}>
    <TagText>
      {props.children}
    </TagText>
    <TagIcon name="x" size={16} />
  </TagContainer>;

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  onRemove: PropTypes.func,
};

Tag.defaultProps = {
  onRemove: () => {},
};

export default Tag;
