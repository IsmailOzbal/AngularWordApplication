import { TestBed } from '@angular/core/testing';

import { WordDescriptionService } from './word-description.service';

describe('WordDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordDescriptionService = TestBed.get(WordDescriptionService);
    expect(service).toBeTruthy();
  });
});
