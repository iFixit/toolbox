import React from 'react';
import { arrayOf, node } from 'prop-types';
import glamorous from 'glamorous';

import constants from '../../constants';

const { color, spacing } = constants;

const Container = glamorous.div({
   position: 'relative',
   borderBottom: `1px solid ${color.grayAlpha[3]}`,

   ':after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: spacing[2],
      background:
         `linear-gradient(to left, ${color.white}, rgba(255, 255, 255, 0))`,
   },
});

const ScrollContainer = glamorous.div({
   display: 'flex',
   alignItems: 'center',
   overflowX: 'auto',
   overflowY: 'hidden',
   WebkitOverflowScrolling: 'touch',
});

const TabsWrapper = glamorous.div({
   display: 'flex',
});

const Tabs = ({ children, ...rest }) => (
   <Container {...rest}>
      <ScrollContainer>
         <TabsWrapper>
            {children}
         </TabsWrapper>
      </ScrollContainer>
   </Container>
);

Tabs.propTypes = {
   children: arrayOf(node).isRequired,
};

export default Tabs;
