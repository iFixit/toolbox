import React from 'react';

const hoistFieldProps = Field => class HoistFieldProps extends React.Component {
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
   }

   setRef(ref) {
      console.log('setRef');

      ref.addEventListener('blur', () => this.setState({
         focus: false,
         showInvalid: false,
      }));

      ref.addEventListener('change', () => this.setState({
         showInvalid: false,
      }));

      ref.addEventListener('focus', () => this.setState({
         focus: true,
      }));

      ref.addEventListener('invalid', () => this.setState({
         showInvalid: true,
      }));

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
      const { validationMessage, validity: { valid } } = this.ref;

      console.log({ ...this.state, validationMessage, valid });

      return (
         <Field
            setRef={this.setRef}
            hoistedProps={{ ...this.state, validationMessage, valid }}
            {...this.props}
         />
      );
   }
};

export default hoistFieldProps;
