import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazdiDetailsComponent } from './gazdi-details.component';

describe('GazdiDetailsComponent', () => {
  let component: GazdiDetailsComponent;
  let fixture: ComponentFixture<GazdiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GazdiDetailsComponent]
    });
    fixture = TestBed.createComponent(GazdiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
