const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

// Models
const Todo = require('./models/todo.js');

// CRUD Queries

const createTodo = async () => {
    const formData = {
        text: "Learn HTML",
        isComplete: true,
    }
    const newTodo = await Todo.create(formData);
    console.log('New Todo:', newTodo);
};

const findTodos = async () => {
    const todos = await Todo.find({});
    console.log("All todos:", todos);
  };

const findTodo = async () => {
    const todo = await Todo.findById('6799fd2dd8af979ea2228dab')
    console.log("Unique Todo:", todo)
}

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};


const updateTodo = async () => {
    const id = '6799fd2dd8af979ea2228dab';
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { isComplete: true },
      { new: true }
    );
    console.log("Updated todo:", updatedTodo);
  };


const deleteTodo = async () => {
    const id = '679e62490d9d5304761a9d89';
    const removedTodo = await Todo.findByIdAndDelete(id);
    console.log('Removed todo:', removedTodo)
  }

const runQueries = async () => {
  console.log('Queries running.');
    await findTodos();
    // await createTodo();
    // await findTodo();
    // await updateTodo();
    await deleteTodo();
};

connect()
/*-------------------------------- Query Functions --------------------------------*/

