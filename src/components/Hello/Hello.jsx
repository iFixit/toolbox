import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hello Toolbox!
 */
const Hello = props =>
  <h1>
    Hello {props.message}
  </h1>;

Hello.propTypes = {
  /** Description of prop "message". */
  message: PropTypes.string.isRequired,
};

export default Hello;
