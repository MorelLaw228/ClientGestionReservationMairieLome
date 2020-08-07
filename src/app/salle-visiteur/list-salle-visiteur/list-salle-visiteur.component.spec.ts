import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalleVisiteurComponent } from './list-salle-visiteur.component';

describe('ListSalleVisiteurComponent', () => {
  let component: ListSalleVisiteurComponent;
  let fixture: ComponentFixture<ListSalleVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSalleVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSalleVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
