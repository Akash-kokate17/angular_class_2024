import { TestBed } from '@angular/core/testing';

import { CrudSubjectService } from './crud-subject.service';

describe('CrudSubjectService', () => {
  let service: CrudSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
