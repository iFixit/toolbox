import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { toSvg } from 'feather-icons';

const SvgContainer = glamorous.span();

const Icon = ({ name }) =>
  <SvgContainer dangerouslySetInnerHTML={{ __html: toSvg(name) }} />;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
