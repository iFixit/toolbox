/* eslint-disable import/no-extraneous-dependencies */
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider';
import { object, string } from 'prop-types';
import React from 'react';

function ConstantUsage({ name, components }) {
   const Pre = components.pre || 'pre';

   const code = `import { constants } from '@ifixit/toolbox'

const { ${name} } = constants;
`;

   return <Pre>{code}</Pre>;
}

ConstantUsage.propTypes = {
   components: object.isRequired, // eslint-disable-line react/forbid-prop-types
   name: string.isRequired,
};

export default withMDXComponents(ConstantUsage);
