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
const withDomProps = (Component, addedProps) => class extends React.PureComponent {
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
      console.log(addedProps);
      console.log(this.ref);
      console.log(this.props);
      // console.log(addedProps(this.ref, this.props));
      // this.ref.setCustomValidity(this.props.customValidity || '');
      // console.log(addedProps(this.ref, this.props));

      const { validationMessage, validity: { valid } } = this.ref;

      if (
         valid !== this.state.valid ||
         validationMessage !== this.state.validationMessage
      ) {
         this.setState({ validationMessage, valid });
      }
   };

   render = () => (
      <Component
         {...this.props}
         domProps={{
            events: this.events,
            setRef: this.setRef,
            ...this.state,
            ...this.props.domProps,
         }}
      />
   );
};

// Wrapper component for the actual input element.
// Reconciles any events that are applied to the input component.
// ex:
// <withDomProps.Target>
//    <input onFocus={() => console.log('This won't get overridden!')}>
// </withDomProps.Target>
withDomProps.Target = ({ children }) => React.cloneElement(children, Object.assign(
   {}, ...Object.keys(children.props.domProps.events).map(eventKey => ({
      [eventKey]: ev => {
         [
            children.props[eventKey],
            children.props.domProps.events[eventKey],
         ].filter(fn => fn instanceof Function).forEach(fn => fn(ev));
      },
   })),
));

withDomProps.Target.propTypes = {
   children: PropTypes.element.isRequired,
};

export default withDomProps;
