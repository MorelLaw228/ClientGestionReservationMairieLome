import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterielComponent } from './create-materiel.component';

describe('CreateMaterielComponent', () => {
  let component: CreateMaterielComponent;
  let fixture: ComponentFixture<CreateMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
