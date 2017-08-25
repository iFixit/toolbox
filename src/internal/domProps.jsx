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

const domProps = {};

domProps.Field = Component => class DomProps extends React.Component {
   state: {
      showInvalid: false,
      focus: false,
   };

   ref = {
      validationMessage: '',
      validity: { valid: true },
   };

   events = Object.assign({}, ...Object.keys(eventStates).map(eventKey => ({
      [eventKey]: () => {
         console.log(eventKey);
         this.setState(eventStates[eventKey]);
      },
   })));

   // Immediately re render when the validity state object can be accessed
   componentDidMount = this.forceUpdate;

   setRef = ref => {
      this.ref = ref;
   };

   render = () => (<Component
      {...this.props}
      domProps={{
         ...this.state,
         events: this.events,
         setRef: this.setRef,
         valid: this.ref.validity.valid,
         validationMessage: this.ref.validationMessage,
      }}
   />);
};

domProps.Target = ({ children }) => React.cloneElement(children, Object.assign(
   {}, ...Object.keys(children.props.domProps.events).map(eventKey => ({
      [eventKey]: ev => {
         children.props.domProps.events[eventKey](ev);
         (children.props[eventKey] || (() => {}))(ev);
      },
   })),
));

domProps.Target.propTypes = {
   children: PropTypes.element.isRequired,
};

export default domProps;
