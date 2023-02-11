import { TestBed } from '@angular/core/testing';

import { ClassroomServiceService } from './classroom-service.service';

describe('ClassroomServiceService', () => {
  let service: ClassroomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
