let tasks = [
    {
        id : 1,
        description : 'description 1'
    }
];

class Task {
    constructor(description) {
        this.id = tasks.length + 1;
        this.description = description;
    }

    static getAll() {
        return tasks;
    }

    static get(id) {
        return tasks.filter((task) => task.id == id)[0];
    }

    static add(description){
        tasks.push(new Task(description));
    }

    static remove(target){
        tasks = tasks.filter((task) => task.id != target.id);
        console.log(tasks.filter((task) => task.id != target.id));
    }

    static edit(id, description) {
        const index = tasks.findIndex((task) => {return task.id == id});
        tasks[index].description = description;
    }
}

module.exports = Task;