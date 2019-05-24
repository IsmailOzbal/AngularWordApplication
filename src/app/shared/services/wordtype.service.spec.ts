import { TestBed } from '@angular/core/testing';

import { WordtypeService } from './wordtype.service';

describe('WordtypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordtypeService = TestBed.get(WordtypeService);
    expect(service).toBeTruthy();
  });
});
