import { TestBed } from '@angular/core/testing';

import { DeleteWordService } from './delete-word.service';

describe('DeleteWordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteWordService = TestBed.get(DeleteWordService);
    expect(service).toBeTruthy();
  });
});
