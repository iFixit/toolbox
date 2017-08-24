import React from 'react';

const getValidity = ({
   validationMessage = '',
   validity: valid = true,
} = {}) => ({
   valid,
   validationMessage,
});

const withValidity = Component => class WithValidity extends React.Component {
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
         <Component
            {...this.props}
            {...getValidity(this.ref)}
            setRef={this.setRef}
         />
      );
   }
};

export default withValidity;
