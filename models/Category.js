const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String },
  subcategories: [
    {
      id: { type: String },
      name: { type: String },
      slug: { type: String },
      description: { type: String }
    }
  ]
});

module.exports = mongoose.model('Category', CategorySchema); 