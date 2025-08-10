
const express = require('express');
const app = express();
app.use(express.json());

const menu = [
  { id: 1, name_ar: "شوربة فطر", price: 28, calories: 170 },
  { id: 2, name_ar: "سلطة جرجير", price: 15, calories: 178 }
];

app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.post('/api/order', (req, res) => {
  console.log('طلب جديد:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
