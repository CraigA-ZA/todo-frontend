import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddEditTodoFormComponent } from './add-edit-todo-form/add-edit-todo-form.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-create-and-manage-todos',
  standalone: true,
  imports: [AddEditTodoFormComponent, EditModalComponent, TodoListComponent, FooterComponent, RouterLink],
  templateUrl: './create-and-manage-todos.component.html',
  styleUrl: './create-and-manage-todos.component.scss'
})
export class CreateAndManageTodosComponent {

}
