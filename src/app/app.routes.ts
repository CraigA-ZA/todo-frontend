import { Routes } from "@angular/router";
import { ArchivedTodosComponent } from "./components/archived-todos/archived-todos.component";
import { CreateAndManageTodosComponent } from "./components/create-and-manage-todos/create-and-manage-todos.component";

export const routes: Routes = [
    { path: '', component: CreateAndManageTodosComponent },
    { path: 'archived', component: ArchivedTodosComponent },
];