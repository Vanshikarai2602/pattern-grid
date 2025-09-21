import React from 'react';

export default function Grid({ grid }) {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;

  const cellSize = Math.max(8, Math.floor(Math.min(800 / cols, 500 / rows)));
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gap: '3px',
    justifyContent: 'center',
  };

  return (
    <div className="grid-wrap">
      <div style={containerStyle}>
        {grid.flatMap((row, r) =>
          row.map((alive, c) => (
            <div
              key={`${r}-${c}`}
              className={`cell ${alive ? 'alive' : 'dead'}`}
              style={{ width: cellSize, height: cellSize }}
            />
          ))
        )}
      </div>
    </div>
  );
}
