import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTodoModel } from '../model/add-todo.model';
import { Todo } from '../model/todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoHttpService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    public getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.baseUrl}/todos/all`)
    }

    public persistUpsertTodo(todo: AddTodoModel): Observable<number> {
        return this.http.put<number>(`${this.baseUrl}/todos/upsert`, todo);
    }

    public persistDeleteTodo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/todos/delete/${id}`);
    }

    public persistToggleTodo(id: number, state: boolean): Observable<void> {
        return this.http.put<void>(`${this.baseUrl}/todos/toggle/${id}`, state);
    }

    public persistArchiveAllByIds(ids: number[]): Observable<void> {
        return this.http.post<void>(`${this.baseUrl}/todos/archive`, ids);
    }
}
