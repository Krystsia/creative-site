import { TestBed, inject } from '@angular/core/testing';

import { GetDateService } from './get-date.service';

describe('GetDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDateService]
    });
  });

  it('should ...', inject([GetDateService], (service: GetDateService) => {
    expect(service).toBeTruthy();
  }));
});
