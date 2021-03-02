import './style.css'

import {Todo, TodoList} from './classes/'

console.log("Hola Mundo desde todo");

const todoList = new TodoList();
const tarea = new Todo("Mi primera tarea");
const tarea2 = new Todo("Mi segunda tarea");

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);