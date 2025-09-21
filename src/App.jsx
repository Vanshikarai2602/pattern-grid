import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import { generateGrid } from './pattern';

export default function App() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(20);
  const [fps, setFps] = useState(6);
  const [running, setRunning] = useState(false);
  const [tick, setTick] = useState(0);
  const [grid, setGrid] = useState(() => generateGrid(10, 20, 0));

  useEffect(() => {
    setGrid(generateGrid(rows, cols, tick));
  }, [rows, cols, tick]);

  useEffect(() => {
    let id;
    if (running) {
      id = setInterval(() => setTick((t) => t + 1), Math.max(20, Math.floor(1000 / fps)));
    }
    return () => clearInterval(id);
  }, [running, fps]);

  function toggleRunning() { setRunning(r => !r); }
  function resetGrid() { setTick(0); setRunning(false); }

  const setRowsBounded = (v) => setRows(Math.max(5, Math.min(200, Number(v))));
  const setColsBounded = (v) => setCols(Math.max(5, Math.min(400, Number(v))));

  return (
    <div className="app">
      <header className="header">
        <h1>Pattern Grid</h1>
        <div className="meta">Grid: {cols} × {rows} • FPS: {fps} • {running ? 'Running' : 'Paused'}</div>
      </header>

      <Controls
        rows={rows}
        cols={cols}
        fps={fps}
        running={running}
        setRows={setRowsBounded}
        setCols={setColsBounded}
        setFps={(v) => setFps(Number(v))}
        toggleRunning={toggleRunning}
        resetGrid={resetGrid}
      />

      <Grid grid={grid} />
    </div>
  );
}
