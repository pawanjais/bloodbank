import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5Component } from './home5.component';

describe('Home5Component', () => {
  let component: Home5Component;
  let fixture: ComponentFixture<Home5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
