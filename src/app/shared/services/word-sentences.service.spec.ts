import { TestBed } from '@angular/core/testing';

import { WordSentencesService } from './word-sentences.service';

describe('WordSentencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordSentencesService = TestBed.get(WordSentencesService);
    expect(service).toBeTruthy();
  });
});
