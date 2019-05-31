import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { New2019Component } from './new2019.component';

describe('New2019Component', () => {
  let component: New2019Component;
  let fixture: ComponentFixture<New2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ New2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(New2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
