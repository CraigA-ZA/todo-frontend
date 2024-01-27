import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public constructor(public todoService: TodoService) {

    }

    public clearCompleted(): void {
        this.todoService.clearCompleted();
    }
}
