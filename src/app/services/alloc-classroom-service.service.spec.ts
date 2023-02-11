import { TestBed } from '@angular/core/testing';

import { AllocClassroomServiceService } from './alloc-classroom-service.service';

describe('AllocClassroomServiceService', () => {
  let service: AllocClassroomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocClassroomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
