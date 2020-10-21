import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const { borderRadius, color, spacing } = constants;

const propTypes = {
   /** Contents of the page navigation bar. */
   children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
   ]).isRequired,
};

const Container = styled.div({
   display: 'flex',
   padding: spacing[1],
   backgroundColor: color.grayAlpha[1],
   borderBottomLeftRadius: borderRadius,
   borderBottomRightRadius: borderRadius,
});

const PageNavBar = props => <Container {...props} />;

PageNavBar.Left = styled.div({ marginRight: 'auto' });
PageNavBar.Right = styled.div({ marginLeft: 'auto' });

PageNavBar.propTypes = propTypes;

export default PageNavBar;
