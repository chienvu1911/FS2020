import React from 'react';
import './App.css';
// import UpdateState from '../components/UpdateState/UpdateState';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
// import LifeCycle from '../components/LifeCycle/LifeCycle';
import Red from '../components/ContextAPI/Red';

function App() {
  return (
    <div className="App">
      <Red />
      {/* <ErrorBoundary>
        <UpdateState />
      </ErrorBoundary>
      <ErrorBoundary>
        <LifeCycle />
      </ErrorBoundary> */}
    </div>
  );
}

export default App;
