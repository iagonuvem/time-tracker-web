import { TestBed } from '@angular/core/testing';

import { TimeTrackServiceService } from './time-track-service.service';

describe('TimeTrackServiceService', () => {
  let service: TimeTrackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeTrackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
