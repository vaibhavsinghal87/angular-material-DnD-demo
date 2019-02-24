import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragHandleDndComponent } from './drag-handle-dnd.component';

describe('DragHandleDndComponent', () => {
  let component: DragHandleDndComponent;
  let fixture: ComponentFixture<DragHandleDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragHandleDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragHandleDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
