import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
    selector: 'app-to-do-app',
    standalone: true,
    templateUrl: './to-do-app.component.html',
    styleUrls: ['./to-do-app.component.css'], // Corrected this line
    imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf]
})
export class ToDoAppComponent implements OnInit {
    localItem: string;
    todos: Todo[];

    constructor() {
        this.localItem = (localStorage.getItem("todos")|| '{}');
        if (this.localItem == null || this.localItem === '{}') {
            this.todos = [];
        } else {
            this.todos = JSON.parse(this.localItem);
        }
    }

    ngOnInit(): void {
    }

    todoDelete(todo: Todo) {
        const index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    }

    todoAdd(todo: Todo) {
        this.todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    toggletodo(todo: Todo) {
        const index = this.todos.indexOf(todo);
       
        this.todos[index].active = !this.todos[index].active;
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

}
