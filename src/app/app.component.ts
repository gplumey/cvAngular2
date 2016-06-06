import { Component } from '@angular/core';
import { AgeComponent } from './age/';
import { CvComponent } from './cv/';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    
    directives: [AgeComponent, CvComponent]
})
export class AppComponent {
    title = 'my-angular2 works!';
}
