import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-archived-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './archived-todo-list.component.html',
  styleUrl: './archived-todo-list.component.scss'
})
export class ArchivedTodoListComponent {
    public constructor(public todoService: TodoService) {}
}
