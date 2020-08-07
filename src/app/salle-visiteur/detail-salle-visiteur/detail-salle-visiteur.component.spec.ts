import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSalleVisiteurComponent } from './detail-salle-visiteur.component';

describe('DetailSalleVisiteurComponent', () => {
  let component: DetailSalleVisiteurComponent;
  let fixture: ComponentFixture<DetailSalleVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSalleVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSalleVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
