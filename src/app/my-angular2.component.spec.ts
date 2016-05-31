import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyAngular2AppComponent } from '../app/my-angular2.component';

beforeEachProviders(() => [MyAngular2AppComponent]);

describe('App: MyAngular2', () => {
  it('should create the app',
      inject([MyAngular2AppComponent], (app: MyAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-angular2 works!\'',
      inject([MyAngular2AppComponent], (app: MyAngular2AppComponent) => {
    expect(app.title).toEqual('my-angular2 works!');
  }));
});
