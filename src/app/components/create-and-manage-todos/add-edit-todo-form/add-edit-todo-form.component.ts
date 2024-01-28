import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddTodoModel } from '../../../model/add-todo.model';
import { Todo } from '../../../model/todo.model';
import { TodoService } from '../../../services/todo.service';

@Component({
    selector: 'app-add-edit-todo-form',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './add-edit-todo-form.component.html',
    styleUrl: './add-edit-todo-form.component.scss'
})
export class AddEditTodoFormComponent implements OnInit {
    @Input() formValues: Todo | null = null;
    @Output() editAnnouncer: EventEmitter<AddTodoModel> = new EventEmitter();

    public addTodoForm = this.formBuilder.group({
        title: this.formBuilder.nonNullable.control('', [Validators.required]),
        description: this.formBuilder.control<string | null>(null)
    })

    public constructor(private formBuilder: FormBuilder, private todoService: TodoService) {

    }

    public ngOnInit(): void {
        if (this.formValues) {
            this.addTodoForm.setValue({
                title: this.formValues.title,
                description: this.formValues.description
            })
        }
    }

    public addTodo(): void {
        if (this.addTodoForm.valid) {
            const todoFormValue = this.addTodoForm.getRawValue();
            this.todoService.addTodo(todoFormValue);
            this.addTodoForm.reset();
        } else {
            this.addTodoForm.markAllAsTouched();
        }
    }

    public editTodo(): void {
        if (this.addTodoForm.valid) {
            const todoFormValue = this.addTodoForm.getRawValue();
            this.editAnnouncer.emit({ title: todoFormValue.title, description: todoFormValue.description })
            this.addTodoForm.reset();
        } else {
            this.addTodoForm.markAllAsTouched();
        }

    }
}
