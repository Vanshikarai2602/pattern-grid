import React from 'react';

export default function Controls({ rows, cols, fps, running, setRows, setCols, setFps, toggleRunning, resetGrid }) {
  return (
    <div className="controls">
      <div>
        <label>Rows:</label>
        <input type="number" min="5" value={rows} onChange={(e) => setRows(e.target.value)} />
      </div>
      <div>
        <label>Cols:</label>
        <input type="number" min="5" value={cols} onChange={(e) => setCols(e.target.value)} />
      </div>
      <div>
        <label>FPS:</label>
        <input type="range" min="1" max="60" value={fps} onChange={(e) => setFps(e.target.value)} />
        <span>{fps}</span>
      </div>
      <div>
        <button onClick={toggleRunning}>{running ? 'Pause' : 'Start'}</button>
        <button onClick={resetGrid}>Reset</button>
      </div>
    </div>
  );
}
