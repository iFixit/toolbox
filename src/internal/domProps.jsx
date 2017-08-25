import React from 'react';

const domProps = Field => class HoistFieldProps extends React.Component {
   constructor(props) {
      super(props);
      this.setRef = this.setRef.bind(this);
      this.state = {
         showInvalid: false,
         focus: false,
      };
      this.ref = {
         validationMessage: '',
         validity: { valid: true },
      };
      this.events = {
         onBlur: () => {
            console.log('blur');
            this.setState({
               focus: false,
               showInvalid: false,
            });
         },
         onChange: () => {
            console.log('change');
            this.setState({
               showInvalid: false,
            });
         },
         onClick: () => {
            console.log('click');
            this.setState({
               showInvalid: false,
            });
         },
         onFocus: () => {
            console.log('focus');
            this.setState({
               focus: true,
            });
         },
         onInvalid: () => {
            console.log('invalid');
            this.setState({
               showInvalid: true,
            });
         },
      };
   }

   setRef(ref) {
      console.log('setRef');

      this.ref = ref;
   }

   componentWillUpdate() {
      console.log('component will update');
   }

   // Immediately re render when the validity state object can be accessed
   componentDidMount() {
      console.log('componentDidMount');

      this.forceUpdate();
   }

   render() {
      const {
         props, state, events, setRef, ref: {
            validationMessage,
            validity: { valid },
         },
      } = this;

      return (
         <Field
            {...props}
            domProps={{ ...state, events, setRef, valid, validationMessage }}
         />
      );
   }
};

domProps.onChange = fn => ev => {
   console.log(this);
   console.log(ev);
   fn(ev);
};

export default domProps;
