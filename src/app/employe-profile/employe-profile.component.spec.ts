import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeProfileComponent } from './employe-profile.component';

describe('EmployeProfileComponent', () => {
  let component: EmployeProfileComponent;
  let fixture: ComponentFixture<EmployeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
