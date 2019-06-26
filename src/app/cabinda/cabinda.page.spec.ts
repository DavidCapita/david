import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabindaPage } from './cabinda.page';

describe('CabindaPage', () => {
  let component: CabindaPage;
  let fixture: ComponentFixture<CabindaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabindaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabindaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
