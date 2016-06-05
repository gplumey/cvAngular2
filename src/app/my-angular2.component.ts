import { Component } from '@angular/core';
import { AgeComponent } from './age/';
import { CvComponent } from './cv/';

@Component({
  moduleId: module.id,
  selector: 'my-angular2-app',
  templateUrl: 'my-angular2.component.html',
  styleUrls: ['my-angular2.component.css'],
  directives : [AgeComponent, CvComponent]
})
export class MyAngular2AppComponent {
  title = 'my-angular2 works!';
}
