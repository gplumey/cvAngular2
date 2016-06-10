import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CvService } from './cv.service';

describe('Cv Service', () => {
  beforeEachProviders(() => [CvService]);

  it('should ...',
      inject([CvService], (service: CvService) => {
    expect(service).toBeTruthy();
  }));
});
