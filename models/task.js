let tasks = [
    {
        id : 1,
        description : 'description 1'
    }
];

class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
    }

    static getAll() {
        return tasks;
    }

    static add(task){
        tasks.push(task);
    }

    static remove(todo){
        tasks.filter((task) => task.id != todo.id);
    }

    static edit(id, description) {
        this.id = id;
        this.description = description;
    }
}

module.exports = Task;