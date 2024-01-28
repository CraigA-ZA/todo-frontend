import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndManageTodosComponent } from './create-and-manage-todos.component';

describe('CreateAndManageTodosComponent', () => {
  let component: CreateAndManageTodosComponent;
  let fixture: ComponentFixture<CreateAndManageTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAndManageTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAndManageTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
