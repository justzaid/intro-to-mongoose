// Schema
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// Compiling the schema into a model:
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

// 1. Tell Mongoose what the object in my database looks like (schema)
// 2. Create model, give it a name + give it the schema (mongoose.model(Singlar Model Name, Schema))
// 3. Share this model with the rest of the application module.exports = Model Name