import { TestBed } from '@angular/core/testing';

import { GetWordViewListByIdService } from './get-word-view-list-by-id.service';

describe('GetWordViewListByIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWordViewListByIdService = TestBed.get(GetWordViewListByIdService);
    expect(service).toBeTruthy();
  });
});
