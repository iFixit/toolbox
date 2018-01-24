import React from 'react';
import glamorous from 'glamorous';

import constants from '../../constants';

const { color } = constants;

const TabsContainer = glamorous.div({
   display: 'flex',
   borderBottom: `1px solid ${color.grayAlpha[3]}`,
});

const Tabs = props => <TabsContainer {...props} />;

export default Tabs;
