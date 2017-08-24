import React from 'react';

const getValidity = ({
   validationMessage = '',
   validity: { valid = true } = {},
} = {}) => ({
   valid,
   validationMessage,
});

const hoistFieldProps = Field => class HoistFieldProps extends React.Component {
   constructor(props) {
      super(props);
      this.setRef = this.setRef.bind(this);
      this.state = {
         showInvalid: false,
         focus: false,
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
      console.log(this.state);
      console.log(getValidity(this.ref));

      return (
         <Field
            setRef={this.setRef}
            hoistedProps={{ ...this.state, ...getValidity(this.ref) }}
            {...this.props}
         />
      );
   }
};

export default hoistFieldProps;
