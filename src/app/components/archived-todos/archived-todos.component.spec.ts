import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTodosComponent } from './archived-todos.component';

describe('ArchivedTodosComponent', () => {
  let component: ArchivedTodosComponent;
  let fixture: ComponentFixture<ArchivedTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
