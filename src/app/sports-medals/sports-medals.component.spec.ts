import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsMedalsComponent } from './sports-medals.component';

describe('SportsMedalsComponent', () => {
  let component: SportsMedalsComponent;
  let fixture: ComponentFixture<SportsMedalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsMedalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsMedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
