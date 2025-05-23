// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000' // Your React app port
}));

// Sample products data
const products = [
  { id: 1, name: "செங்கல்", price: 10 },
  { id: 2, name: "சிமெண்ட்", price: 400 }
];

// API Endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});