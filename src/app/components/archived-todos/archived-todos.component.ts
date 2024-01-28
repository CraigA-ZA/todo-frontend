
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArchivedTodoListComponent } from './archived-todo-list/archived-todo-list.component';

@Component({
  selector: 'app-archived-todos',
  standalone: true,
  imports: [ArchivedTodoListComponent, RouterLink],
  templateUrl: './archived-todos.component.html',
  styleUrl: './archived-todos.component.scss'
})
export class ArchivedTodosComponent {
    public back(): void {

    }
}
