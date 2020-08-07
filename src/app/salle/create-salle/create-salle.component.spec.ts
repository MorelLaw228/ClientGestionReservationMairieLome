import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSalleComponent } from './create-salle.component';

describe('CreateSalleComponent', () => {
  let component: CreateSalleComponent;
  let fixture: ComponentFixture<CreateSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
