import { TestBed, inject } from '@angular/core/testing';

import { SportsMedalsService } from './sports-medals.service';

describe('SportsMedalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsMedalsService]
    });
  });

  it('should ...', inject([SportsMedalsService], (service: SportsMedalsService) => {
    expect(service).toBeTruthy();
  }));
});
