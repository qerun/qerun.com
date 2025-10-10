// Minimal production server for Cloud Run
// Serves the built Vite app from the `dist` folder and listens on $PORT

const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

const distDir = path.join(__dirname, 'dist');
app.use(express.static(distDir));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`qerun.com server listening on port ${port}`);
});

