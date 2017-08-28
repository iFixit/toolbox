import React from 'react';
import PropTypes from 'prop-types';

const eventStates = {
   onBlur: {
      focus: false,
   },
   onFocus: {
      focus: true,
   },
};

// Higher order component to access an input component's dom node properties
// from its parent's react component.
const domProps = Component => class extends React.Component {
   state = {
      validationMessage: '',
      valid: true,
      focus: false,
   };

   events = Object.assign({}, ...Object.keys(eventStates).map(eventKey => ({
      [eventKey]: () => this.setState(eventStates[eventKey]),
   })));

   setRef = ref => {
      if (ref) {
         this.ref = ref;
         this.componentDidUpdate();
      }
   };

   componentDidUpdate = () => {
      const { validationMessage, validity: { valid } } = this.ref;

      console.log('componentDidUpdate');
      console.log("'", this.ref.value, "'");
      console.log(valid);
      console.log(validationMessage);

      if (
         valid !== this.state.valid ||
         validationMessage !== this.state.validationMessage
      ) {
         console.log('setting state');
         this.setState({ validationMessage, valid });
      } else {
         console.log('not setting state');
      }

      console.log('');
   };

   render = () => (
      <Component
         {...this.props}
         domProps={{
            ...this.state,
            events: this.events,
            setRef: this.setRef,
         }}
      />
   );
};

// Wrapper component for the actual input component.
// Reconciles any events that are applied to the input component.
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
