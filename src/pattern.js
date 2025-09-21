export function generateGrid(rows, cols, tick = 0) {
  const grid = [];
  const stripeWidth = Math.max(1, Math.floor(Math.min(rows, cols) / 6));

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      const diagPeriod = rows + cols;
      const offset = ((c - r + tick) % diagPeriod + diagPeriod) % diagPeriod;
      const diagOn = offset < stripeWidth;

      const wave = Math.sin((c / cols) * Math.PI * 4 + tick * 0.25);
      row.push(diagOn || wave > 0.25);
    }
    grid.push(row);
  }
  return grid;
}
