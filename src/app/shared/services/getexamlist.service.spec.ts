import { TestBed } from '@angular/core/testing';

import { GetexamlistService } from './getexamlist.service';

describe('GetexamlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetexamlistService = TestBed.get(GetexamlistService);
    expect(service).toBeTruthy();
  });
});
