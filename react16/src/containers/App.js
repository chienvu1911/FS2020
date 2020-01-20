import React from 'react';
import './App.css';
import UpdateState from '../components/UpdateState/UpdateState';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UpdateState />
      </ErrorBoundary>
    </div>
  );
}

export default App;
