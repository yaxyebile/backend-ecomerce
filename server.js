const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const ordersRoutes = require('./routes/orders');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 