import React from 'react';
import './App.css';
import UpdateState from '../components/UpdateState/UpdateState';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import LifeCycle from '../components/LifeCycle/LifeCycle';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UpdateState />
      </ErrorBoundary>
      <ErrorBoundary>
        <LifeCycle />
      </ErrorBoundary>
    </div>
  );
}

export default App;
