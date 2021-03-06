import React from 'react';
import { arrayOf, node } from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';

const { color, spacing } = constants;

const Container = styled.div({
   borderBottom: `1px solid ${color.grayAlpha[3]}`,
});

const ScrollContainer = styled.div({
   display: 'flex',
   alignItems: 'center',
   overflowX: 'auto',
   overflowY: 'hidden',
   WebkitOverflowScrolling: 'touch',
   maskImage: `linear-gradient(to left, transparent, ${color.black} ${
      spacing[2]
   })`,
});

const TabsWrapper = styled.div({
   display: 'flex',
});

const Tabs = ({ children, ...props }) => (
   <Container {...props}>
      <ScrollContainer>
         <TabsWrapper>{children}</TabsWrapper>
      </ScrollContainer>
   </Container>
);

Tabs.propTypes = {
   children: arrayOf(node).isRequired,
};

export default Tabs;
