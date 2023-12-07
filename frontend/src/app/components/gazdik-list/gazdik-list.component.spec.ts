import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazdikListComponent } from './gazdik-list.component';

describe('GazdikListComponent', () => {
  let component: GazdikListComponent;
  let fixture: ComponentFixture<GazdikListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GazdikListComponent]
    });
    fixture = TestBed.createComponent(GazdikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
