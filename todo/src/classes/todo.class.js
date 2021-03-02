export default class Todo {
    
    constructor(tarea)
    {
        this.tarea      = tarea;
        this.id         = new Date().getTime() + parseInt(Math.random()*100);
        this.completado = false;
        this.creado     = new Date();
    }
}