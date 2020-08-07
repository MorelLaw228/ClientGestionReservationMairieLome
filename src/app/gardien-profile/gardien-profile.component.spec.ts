import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardienProfileComponent } from './gardien-profile.component';

describe('GardienProfileComponent', () => {
  let component: GardienProfileComponent;
  let fixture: ComponentFixture<GardienProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardienProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardienProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
