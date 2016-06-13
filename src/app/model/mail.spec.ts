import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Mail} from './mail';

describe('Mail', () => {
  it('should create an instance', () => {
    expect(new Mail()).toBeTruthy();
  });
});
