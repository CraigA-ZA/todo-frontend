import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTodoListComponent } from './archived-todo-list.component';

describe('ArchivedTodoListComponent', () => {
  let component: ArchivedTodoListComponent;
  let fixture: ComponentFixture<ArchivedTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
