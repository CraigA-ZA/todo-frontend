import { Component } from '@angular/core';
import { AddEditTodoFormComponent } from './components/create-and-manage-todos/add-edit-todo-form/add-edit-todo-form.component';
import { EditModalComponent } from './components/create-and-manage-todos/edit-modal/edit-modal.component';
import { TodoListComponent } from './components/create-and-manage-todos/todo-list/todo-list.component';
import { FooterComponent } from './components/create-and-manage-todos/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
