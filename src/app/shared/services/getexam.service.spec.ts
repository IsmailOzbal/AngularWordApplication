import { TestBed } from '@angular/core/testing';

import { GetexamService } from './getexam.service';

describe('GetexamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetexamService = TestBed.get(GetexamService);
    expect(service).toBeTruthy();
  });
});
