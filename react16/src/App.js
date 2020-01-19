import React from 'react';
import logo from './logo.svg';
import './App.css';
import UpdateState from './UpdateState';
import ErrorBoundary from './ErrorBoundary';

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
