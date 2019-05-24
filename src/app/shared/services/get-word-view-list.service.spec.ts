import { TestBed } from '@angular/core/testing';

import { GetWordViewListService } from './get-word-view-list.service';

describe('GetWordViewListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWordViewListService = TestBed.get(GetWordViewListService);
    expect(service).toBeTruthy();
  });
});
