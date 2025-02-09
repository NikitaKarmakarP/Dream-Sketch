import React, { useState } from 'react';
import DreamEnvironment from './DreamEnvironment';
import './index.css';

function App() {
  const [dream, setDream] = useState('');
  const [environment, setEnvironment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/interpret-dream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dreamText: dream })
    });
    const data = await response.json();
    setEnvironment(data.environment);
  };

  return (
    <div className="app">
      <h1>Dream Sketch: AI Sleep Visualizer</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Describe your dream..."
        />
        <button type="submit">Visualize Dream</button>
      </form>
      {environment && <DreamEnvironment environmentData={environment} />}
    </div>
  );
}

export default App;
