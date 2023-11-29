import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionlogComponent } from './actionlog.component';

describe('ActionlogComponent', () => {
  let component: ActionlogComponent;
  let fixture: ComponentFixture<ActionlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionlogComponent]
    });
    fixture = TestBed.createComponent(ActionlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
