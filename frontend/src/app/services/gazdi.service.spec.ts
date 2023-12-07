import { TestBed } from '@angular/core/testing';

import { GazdiService } from './gazdi.service';

describe('GazdiService', () => {
  let service: GazdiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GazdiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
