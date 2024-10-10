import React from 'react';
import './App.css';
import { ResultsPage } from './components/results/ResultsPage';
//import { ResultsPage } from './components/results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Lowlands Box League</div>
        <ResultsPage />
      </header>
    </div>
  );
}

export default App;
