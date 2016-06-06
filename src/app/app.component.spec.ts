import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: MyAngular2', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-angular2 works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('my-angular2 works!');
  }));
});
