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

    static get(id) {
        return tasks.filter((task) => task.id == id)[0];
    }

    static add(task){
        tasks.push(task);
    }

    static remove(target){
        tasks.filter((task) => task.id != target.id);
    }

    static edit(id, description) {
        this.id = id;
        this.description = description;
    }
}

module.exports = Task;