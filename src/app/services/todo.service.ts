import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddTodoModel } from '../model/add-todo.model';
import { Todo } from '../model/todo.model';
import { TodoHttpService } from './todo-http.service';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);

    constructor(private todoHttp: TodoHttpService) {
        this.todoHttp.getAllTodos().subscribe((todos: Todo[]) => {
            this._todos.next(todos);
        })
    }

    get todos() {
        return this._todos.asObservable();
    }

    public getTodo(index: number): Todo {
        return this._todos.value[index];
    }

    public addTodo(todo: AddTodoModel): void {
        this.todoHttp.persistUpsertTodo(todo).subscribe((id) => {
            this._todos.next([...this._todos.value, new Todo(id, todo.title, todo.description)]);
        });
    }

    public removeTodo(index: number): void {
        this.todoHttp.persistDeleteTodo(this._todos.value[index].id).subscribe();
        const tempArray = [...this._todos.value];
        tempArray.splice(index, 1);
        this._todos.next(tempArray);
    }

    public updateTodo(index: number, todo: AddTodoModel): void {
        const todoToUpdate = this._todos.value[index]
        const idToUpdate = todoToUpdate.id;

        todoToUpdate.title = todo.title;
        todoToUpdate.description = todo.description;
        this._todos.next([...this._todos.value]);

        this.todoHttp.persistUpsertTodo({ ...todo, id: idToUpdate }).subscribe()
    }

    public toggleTodo(index: number) {
        const todo = this.getTodo(index);
        this.todoHttp.persistToggleTodo(todo.id, todo.completed).subscribe();
    }

    public clearCompleted(): void {
        const idsToDelete = this._todos.value.filter(todo => todo.completed).map(todo => todo.id);
        this._todos.next(this._todos.value.filter(todo => !todo.completed));
        this.todoHttp.persistDeleteAllByIds(idsToDelete).subscribe();
    }
}
