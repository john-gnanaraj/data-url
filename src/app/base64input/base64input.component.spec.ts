import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64inputComponent } from './base64input.component';

describe('Base64inputComponent', () => {
  let component: Base64inputComponent;
  let fixture: ComponentFixture<Base64inputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64inputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64inputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
