import React from 'react';
import PropTypes from 'prop-types';

const eventStates = {
   onBlur: {
      focus: false,
      showInvalid: false,
   },
   onChange: {
      showInvalid: false,
   },
   onClick: {
      showInvalid: false,
   },
   onFocus: {
      focus: true,
   },
   onInvalid: {
      showInvalid: true,
   },
};

const domProps = Component => class DomProps extends React.Component {
   state = {
      validationMessage: '',
      valid: true,
      showInvalid: false,
      focus: false,
   };

   events = Object.assign({}, ...Object.keys(eventStates).map(eventKey => ({
      [eventKey]: () => this.setState(eventStates[eventKey]),
   })));

   setRef = ref => {
      this.ref = ref;
   };

   // Immediately re render when the validity state object can be accessed
   componentDidMount = () => this.componentDidUpdate();

   componentDidUpdate = () => {
      const { validationMessage, validity: { valid } } = this.ref;

      if (
         valid !== this.state.valid ||
         validationMessage !== this.state.validationMessage
      ) {
         console.log('componentDidUpdate reupdate');
         this.setState({ validationMessage, valid });
      }
   }

   render = () => (<Component
      {...this.props}
      domProps={{
         ...this.state,
         events: this.events,
         setRef: this.setRef,
      }}
   />);
};

domProps.Target = ({ children }) => React.cloneElement(children, Object.assign(
   {}, ...Object.keys(children.props.domProps.events).map(eventKey => ({
      [eventKey]: ev => {
         (children.props[eventKey] || (() => {}))(ev);
         children.props.domProps.events[eventKey](ev);
      },
   })),
));

domProps.Target.propTypes = {
   children: PropTypes.element.isRequired,
};

export default domProps;
