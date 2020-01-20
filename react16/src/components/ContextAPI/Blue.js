import React from 'react';
import AppContext from './AppContext';
import Green from './Green';

const Blue = () => (
    <div className="blue">
      <AppContext.Consumer>
        {context => (
          <>
            <button onClick={context.inc}>INC</button>
            <button onClick={context.dec}>DEC</button>
          </>
        )}
      </AppContext.Consumer>
      <Green />
    </div>
  );

export default Blue;