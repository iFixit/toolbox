import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';
import Tab from '../Tab/Tab';

test('renders without crashing', () => {
   const tree = renderer
      .create(
         <Tabs>
            <Tab active>All</Tab>
            <Tab>Store</Tab>
            <Tab>Guides</Tab>
            <Tab>Wikis</Tab>
            <Tab>Devices</Tab>
            <Tab>Answers</Tab>
         </Tabs>,
      )
      .toJSON();
   expect(tree).toMatchSnapshot();
});
