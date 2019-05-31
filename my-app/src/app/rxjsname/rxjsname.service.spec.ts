import { TestBed } from '@angular/core/testing';

import { RxjsnameService } from './rxjsname.service';

describe('RxjsnameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsnameService = TestBed.get(RxjsnameService);
    expect(service).toBeTruthy();
  });
});
