import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../../../model/todo.model';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [AsyncPipe, CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    activeTodos: Observable<Todo[]>;

    public constructor(public todoService: TodoService) {
        this.activeTodos = todoService.todos.pipe(map(todos => todos.filter(todo => !todo.completed)));
    }

    public archiveCompleted(): void {
        this.todoService.archiveCompleted();
    }
}
