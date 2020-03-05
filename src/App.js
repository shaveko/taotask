import React from 'react';
import './App.css';
import ListComponent from './components/ListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          List of users
        </p>
      </header>
      <ListComponent />
    </div>
  );
}

export default App;
