import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoModel } from '../../../model/add-todo.model';
import { TodoService } from '../../../services/todo.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

    public constructor(private ngbModal: NgbModal, public todoService: TodoService) {

    }

    public editTodo(index: number): void {
        const modalRef = this.ngbModal.open(EditModalComponent);
        modalRef.componentInstance.todo = this.todoService.getTodo(index);

        modalRef.closed.subscribe((todo: AddTodoModel) => {
            this.todoService.updateTodo(index, todo);
        })
    }

    public deleteTodo(index: number): void {
        this.todoService.removeTodo(index);
    }

    public persistToggle(index: number): void {
        this.todoService.toggleTodo(index);
    }
}
