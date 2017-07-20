import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from 'glamorous';

/**
 * Hello Toolbox!
 */
const Hello = props =>
  <H1 color="blue">
    Hello {props.message}
  </H1>;

Hello.propTypes = {
  /** Description of prop "message". */
  message: PropTypes.string.isRequired,
};

export default Hello;
