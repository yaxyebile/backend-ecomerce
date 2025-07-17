const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const ordersRoutes = require('./routes/orders');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://somalisisichannel:EWqhMS8TsIZEwK8v@ecommerce.xujifmk.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce', {
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