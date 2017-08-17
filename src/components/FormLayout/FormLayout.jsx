import React from 'react';
import PropTypes from 'prop-types';
import glamorous, { Div } from 'glamorous';

const formContainerFactory = ({ gutter }) =>
   glamorous.div({
      display: 'flex',
      flexDirection: 'column',
      margin: `-${gutter / 2}px 0`,
   });

const formGroupFactory = () =>
   glamorous.div({
      display: 'flex',
      flexDirection: 'column',
   });

const formFieldFactory = ({ gutter }) =>
   glamorous.div({
      margin: `${gutter / 2}px 0`,
   });

const FormLayout = ({ children, gutter }) =>
  <Div background="xlightblue">
    {children({
       FormContainer: formContainerFactory({ gutter }),
       FormGroup: formGroupFactory(),
       FormField: formFieldFactory({ gutter }),
    })}
  </Div>;

FormLayout.propTypes = {
   children: PropTypes.func,
   gutter: PropTypes.number,
};

FormLayout.defaultProps = {
   children: () => {},
   gutter: 32,
};

export default FormLayout;
