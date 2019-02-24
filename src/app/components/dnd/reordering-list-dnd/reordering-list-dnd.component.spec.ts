import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderingListDnDComponent } from './reordering-list-dnd.component';

describe('ReorderingListDnDComponent', () => {
  let component: ReorderingListDnDComponent;
  let fixture: ComponentFixture<ReorderingListDnDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderingListDnDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderingListDnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
