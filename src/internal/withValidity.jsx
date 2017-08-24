import React from 'react';

const getValidity = ({ validationMessage = '', validity: valid = true } = {}) => ({
   valid,
   validationMessage,
});

const withValidity = Component => class extends React.Component {
   setRef = ref => {
      this.ref = ref;
   }

   render() {
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
