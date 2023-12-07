import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGazdiComponent } from './add-gazdi.component';

describe('AddGazdiComponent', () => {
  let component: AddGazdiComponent;
  let fixture: ComponentFixture<AddGazdiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGazdiComponent]
    });
    fixture = TestBed.createComponent(AddGazdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
