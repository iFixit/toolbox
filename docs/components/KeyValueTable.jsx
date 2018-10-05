/* eslint-disable import/no-extraneous-dependencies */
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider';
import Color from 'color';
import { array, object, oneOfType, string } from 'prop-types';
import React, { Component } from 'react';
import borderRadius from '../../src/constants/borderRadius';
import color from '../../src/constants/color/color';
import spacing from '../../src/constants/spacing';

class KeyValueTable extends Component {
   static propTypes = {
      components: object.isRequired, // eslint-disable-line react/forbid-prop-types
      data: oneOfType([array, object]).isRequired,
      name: string.isRequired,
   };

   renderRows({ name, data, components }) {
      const Tr = components.tr || 'tr';
      const Td = components.td || 'td';

      if (isPrimitive(data)) {
         return (
            <Tr key={data}>
               <Td>
                  <code>{name}</code>
               </Td>
               <Td>
                  {isColor(data) ? (
                     <div
                        style={{
                           display: 'inline-block',
                           verticalAlign: 'middle',
                           width: 16,
                           height: 16,
                           marginRight: spacing[1],
                           backgroundColor: data,
                           boxShadow: `inset 0 0 0 1px ${color.grayAlpha[2]}`,
                           borderRadius,
                        }}
                     />
                  ) : null}
                  <code>{typeof data === 'string' ? `"${data}"` : data}</code>
               </Td>
               <Td>
                  <code>{typeof data}</code>
               </Td>
            </Tr>
         );
      }

      if (isArray(data)) {
         return data.map((value, index) =>
            this.renderRows({
               name: `${name}[${index}]`,
               data: value,
               components,
            }),
         );
      }

      return Object.entries(data).map(([key, value]) =>
         this.renderRows({ name: `${name}.${key}`, data: value, components }),
      );
   }

   render() {
      const { name, data, components } = this.props;

      const Table = components.table || 'table';
      const Thead = components.thead || 'thead';
      const Tr = components.tr || 'tr';
      const Th = components.th || 'th';
      const Tbody = components.tbody || 'tbody';

      return (
         <Table>
            <Thead>
               <Tr>
                  <Th>Key</Th>
                  <Th>Value</Th>
                  <Th>Type</Th>
               </Tr>
            </Thead>
            <Tbody>{this.renderRows({ name, data, components })}</Tbody>
         </Table>
      );
   }
}

function isArray(value) {
   return Array.isArray(value);
}

// Source: https://stackoverflow.com/a/31538091/3948967
function isPrimitive(value) {
   return value !== Object(value);
}

function isColor(value) {
   try {
      // This call will throw an error if the value is not a valid color
      Color(value);
      return true;
   } catch (error) {
      return false;
   }
}

export default withMDXComponents(KeyValueTable);
