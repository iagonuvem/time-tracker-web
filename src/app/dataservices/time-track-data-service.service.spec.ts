import { TestBed } from '@angular/core/testing';

import { TimeTrackDataServiceService } from './time-track-data-service.service';

describe('TimeTrackDataServiceService', () => {
  let service: TimeTrackDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeTrackDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
