import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDnDComponent } from './basic-dnd.component';

describe('BasicDnDComponent', () => {
  let component: BasicDnDComponent;
  let fixture: ComponentFixture<BasicDnDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDnDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
