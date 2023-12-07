import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHazikedvencComponent } from './add-hazikedvenc.component';

describe('AddHazikedvencComponent', () => {
  let component: AddHazikedvencComponent;
  let fixture: ComponentFixture<AddHazikedvencComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHazikedvencComponent]
    });
    fixture = TestBed.createComponent(AddHazikedvencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
