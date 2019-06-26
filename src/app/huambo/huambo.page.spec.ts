import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuamboPage } from './huambo.page';

describe('HuamboPage', () => {
  let component: HuamboPage;
  let fixture: ComponentFixture<HuamboPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuamboPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuamboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
