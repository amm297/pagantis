import { TestBed } from '@angular/core/testing';

import { WalletRestService } from './wallet-rest.service';

describe('WalletRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletRestService = TestBed.get(WalletRestService);
    expect(service).toBeTruthy();
  });
});
