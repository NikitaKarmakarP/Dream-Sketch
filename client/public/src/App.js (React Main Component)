import React, { useState } from 'react';
import DreamEnvironment from './DreamEnvironment';
import './index.css';

function App() {
  const [dreamInput, setDreamInput] = useState('');
  const [dreamData, setDreamData] = useState(null);

  const handleDreamSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/interpret-dream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dreamText: dreamInput }),
    });
    const data = await response.json();
    setDreamData(data);
  };

  return (
    <div className="app-container">
      <h1>Dream Sketch: AI Sleep Visualizer</h1>
      <form onSubmit={handleDreamSubmit}>
        <textarea
          placeholder="Describe your dream here..."
          value={dreamInput}
          onChange={(e) => setDreamInput(e.target.value)}
        ></textarea>
        <button type="submit">Visualize Dream</button>
      </form>
      {dreamData && <DreamEnvironment environmentData={dreamData} />}
    </div>
  );
}

export default App;
