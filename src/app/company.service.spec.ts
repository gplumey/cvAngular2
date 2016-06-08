import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CompanyService } from './company.service';

describe('CompanyService Service', () => {
  beforeEachProviders(() => [CompanyService]);

  it('should ...',
      inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
