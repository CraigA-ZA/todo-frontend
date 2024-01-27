import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoModel } from '../../model/add-todo.model';
import { Todo } from '../../model/todo.model';
import { AddEditTodoFormComponent } from '../add-edit-todo-form/add-edit-todo-form.component';

@Component({
    selector: 'app-edit-modal',
    standalone: true,
    imports: [ReactiveFormsModule, AddEditTodoFormComponent],
    templateUrl: './edit-modal.component.html',
    styleUrl: './edit-modal.component.scss'
})
export class EditModalComponent {
    @Input() public todo!: Todo;
    activeModal = inject(NgbActiveModal);

    public handleSubmit(todo: AddTodoModel): void {
        this.activeModal.close(todo);
    }
}
