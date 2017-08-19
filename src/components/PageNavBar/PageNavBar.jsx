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
   display: 'block',
   padding: spacing[1],
   backgroundColor: color.grayAlpha[1],
   borderBottomLeftRadius: borderRadius,
   borderBottomRightRadius: borderRadius,

   // clearfix (IE 8 and up)
   // source: https://css-tricks.com/snippets/css/clear-fix/
   '&:after': {
      content: '""',
      display: 'table',
      clear: 'both',
   },
});

const PageNavBar = props => <Container {...props} />;

PageNavBar.Left = glamorous.div({ float: 'left' });
PageNavBar.Right = glamorous.div({ float: 'right' });

PageNavBar.propTypes = propTypes;

export default PageNavBar;
