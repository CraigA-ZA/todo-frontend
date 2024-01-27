import { Component } from '@angular/core';
import { AddEditTodoFormComponent } from './components/add-edit-todo-form/add-edit-todo-form.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AddEditTodoFormComponent, EditModalComponent, TodoListComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

}
