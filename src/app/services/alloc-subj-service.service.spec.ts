import { TestBed } from '@angular/core/testing';

import { AllocSubjServiceService } from './alloc-subj-service.service';

describe('AllocSubjServiceService', () => {
  let service: AllocSubjServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocSubjServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
