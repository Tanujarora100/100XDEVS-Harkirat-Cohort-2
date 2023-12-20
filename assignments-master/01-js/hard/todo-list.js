class Todo {
    constructor() {
        this.todoArray = [];
    }

    add(todo) {
        this.todoArray.push(todo);
    }

    remove(index) {
        if (index >= 0 && index < this.todoArray.length) {
            this.todoArray.splice(index, 1);
        }
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todoArray.length) {
            this.todoArray[index] = updatedTodo;
        }
    }

    getAll() {
        return this.todoArray;
    }

    get(index) {
        return index >= 0 && index < this.todoArray.length ? this.todoArray[index] : null;
    }

    clear() {
        this.todoArray = [];
    }
}

module.exports = Todo;
