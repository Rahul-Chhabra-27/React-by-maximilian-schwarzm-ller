import React from 'react';
const withClass = (WrapperComponent,classes) => {
    return props => (
        <div className = {classes}>
          <WrapperComponent {...props}></WrapperComponent>
      </div>
    );
}
export default withClass; 