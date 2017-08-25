import React from 'react';

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

const domProps = Component => class DomProps extends React.PureComponent {
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

   componentWillUpdate = () => { console.log('component will update'); };

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

domProps.target = (props = { domProps: {} }) => ({
   ...props,
   ...Object.assign({}, ...Object.keys(props.domProps.events).map(eventKey => ({
      [eventKey]: ev => {
         props.domProps.events[eventKey](ev);
         (props[eventKey] || (() => {}))(ev);
      },
   }))),
});

export default domProps;
