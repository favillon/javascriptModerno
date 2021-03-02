export default class TodoList{

    constructor()
    {
        this.todos = [];
    }

    nuevoTodo(tarea)
    {
        this.todos.push(tarea);
    }

    eliminarTodo(id)
    {
        this.todos.pop(id);
    }
    marcarCompletado()
    {

    }

    eliminarCompletado()
    {

    }
}