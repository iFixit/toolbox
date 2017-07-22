import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { toSvg } from 'feather-icons';

const SvgContainer = glamorous.span(
  {
    display: 'inline-block',
  },
  ({ size, color, strokeWidth }) => ({
    width: size,
    height: size,
    color,
    strokeWidth,
  }),
);

const Icon = props =>
  <SvgContainer
    size={props.size}
    color={props.color}
    strokeWidth={props.strokeWidth}
    dangerouslySetInnerHTML={{
      __html: toSvg(props.name, {
        width: '100%',
        height: '100%',
        'stroke-width': 'inherit',
      }),
    }}
  />;

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.string.isRequired,

  /** Any legal CSS color value for the stroke color */
  color: PropTypes.string,

  /** Width and height of the icon in pixels */
  size: PropTypes.number,

  /** Stroke width of the icon in pixels */
  strokeWidth: PropTypes.number,
};

Icon.defaultProps = {
  color: 'currentColor',
  size: 24,
  strokeWidth: 2,
};

export default Icon;
