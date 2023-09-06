import { TestBed } from '@angular/core/testing';

import { CustomvaldiatorxService } from './customvaldiatorx.service';

describe('CustomvaldiatorxService', () => {
  let service: CustomvaldiatorxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomvaldiatorxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
