import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazikedvencDetailComponent } from './hazikedvenc-detail.component';

describe('HazikedvencDetailComponent', () => {
  let component: HazikedvencDetailComponent;
  let fixture: ComponentFixture<HazikedvencDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazikedvencDetailComponent]
    });
    fixture = TestBed.createComponent(HazikedvencDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
