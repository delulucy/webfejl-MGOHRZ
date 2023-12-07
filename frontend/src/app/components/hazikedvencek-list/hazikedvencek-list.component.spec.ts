import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazikedvencekListComponent } from './hazikedvencek-list.component';

describe('HazikedvencekListComponent', () => {
  let component: HazikedvencekListComponent;
  let fixture: ComponentFixture<HazikedvencekListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazikedvencekListComponent]
    });
    fixture = TestBed.createComponent(HazikedvencekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
