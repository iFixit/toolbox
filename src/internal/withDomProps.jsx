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
const withDomProps = (Component, addedProps = () => ({})) =>
   class extends React.Component {
      state = {
         focus: false,
         ...addedProps(this.ref, this.props),
      };

      componentDidUpdate = () => {
         const updatedProps = Object.assign(
            {},
            ...Object.entries(addedProps(this.ref, this.props))
               .filter(([propKey, prop]) => this.state[propKey] !== prop)
               .map(([propKey, prop]) => ({
                  [propKey]: prop,
               })),
         );

         if (Object.keys(updatedProps).length) {
            this.setState(updatedProps);
         }
      };

      setRef = ref => {
         if (ref) {
            this.ref = ref;
            this.componentDidUpdate();
         }
      };

      events = Object.assign(
         {},
         ...Object.keys(eventStates).map(eventKey => ({
            [eventKey]: () => this.setState(eventStates[eventKey]),
         })),
      );

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
withDomProps.Target = ({ children: child }) =>
   React.cloneElement(
      child,
      Object.assign(
         {},
         ...Object.keys(child.props.domProps.events).map(eventKey => ({
            [eventKey]: ev => {
               [child.props[eventKey], child.props.domProps.events[eventKey]]
                  .filter(fn => fn instanceof Function)
                  .forEach(fn => fn(ev));
            },
         })),
      ),
   );

withDomProps.Target.propTypes = {
   children: PropTypes.element.isRequired,
};

export default withDomProps;
