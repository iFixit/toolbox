import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { borderRadius, color, spacing } from '../../constants';

const propTypes = {
   /** Contents of the page navigation bar. */
   children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
   ]).isRequired,
};

const Container = glamorous.div({
   display: 'flex',
   padding: spacing[1],
   backgroundColor: color.grayAlpha[1],
   borderBottomLeftRadius: borderRadius,
   borderBottomRightRadius: borderRadius,
});

const PageNavBar = props => <Container {...props} />;

PageNavBar.Left = glamorous.div({ marginRight: 'auto' });
PageNavBar.Right = glamorous.div({ marginLeft: 'auto' });

PageNavBar.propTypes = propTypes;

export default PageNavBar;
