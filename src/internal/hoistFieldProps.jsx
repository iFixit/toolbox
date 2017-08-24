import React from 'react';

const getValidity = ({
   validationMessage = '',
   validity: { valid } = true,
} = {}) => ({
   valid,
   validationMessage,
});

const hoistFieldProps = Field => class HoistFieldProps extends React.Component {
   setRef = ref => {
      console.log('setRef');

      this.ref = ref;
   }

   // Immediately re render when the validity state object can be accessed
   componentDidMount() {
      console.log('componentDidMount');

      this.forceUpdate();
   }

   render() {
      console.log(getValidity(this.ref));

      return (
         <Field
            setRef={this.setRef}
            {...getValidity(this.ref)}
            {...this.props}
         />
      );
   }
};

export default hoistFieldProps;
