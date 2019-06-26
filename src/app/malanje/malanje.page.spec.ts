import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalanjePage } from './malanje.page';

describe('MalanjePage', () => {
  let component: MalanjePage;
  let fixture: ComponentFixture<MalanjePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalanjePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
