/*
    todo{
        title:string;
        discription : string;
        completed: boolean;
    }
*/

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://adminofficial:37bEvATDEZ7aYWgm@cluster0.t1qnw1g.mongodb.net/');


// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}