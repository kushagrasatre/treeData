import { TestBed } from '@angular/core/testing';

import { SearcJsonService } from './searc-json.service';

describe('SearcJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearcJsonService = TestBed.get(SearcJsonService);
    expect(service).toBeTruthy();
  });
});
