import { TestBed } from '@angular/core/testing';

import { TaskCategoryServiceService } from './task-category-service.service';

describe('TaskCategoryServiceService', () => {
  let service: TaskCategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
