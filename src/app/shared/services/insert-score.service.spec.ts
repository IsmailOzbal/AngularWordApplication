import { TestBed } from '@angular/core/testing';

import { InsertScoreService } from './insert-score.service';

describe('InsertScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsertScoreService = TestBed.get(InsertScoreService);
    expect(service).toBeTruthy();
  });
});
