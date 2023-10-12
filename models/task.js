let tasks = [
    {
        id : 1,
        description : 'description 1'
    }
];

class Task {
    constructor(description) {
        this.id = tasks.length;
        this.description = description;
    }

    static getAll() {
        return tasks;
    }

    static get(id) {
        return tasks.filter((task) => task.id == id)[0];
    }

    static add(task){
        tasks.push(task);
        return tasks[tasks.length - 1].id;
    }

    static remove(target){
        tasks.filter((task) => task.id != target.id);
    }

    static edit(description) {
        this.description = description;
    }
}

module.exports = Task;