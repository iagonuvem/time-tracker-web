import { TestBed } from '@angular/core/testing';

import { TaskDescriptionServiceService } from './task-description-service.service';

describe('TaskDescriptionServiceService', () => {
  let service: TaskDescriptionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDescriptionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
