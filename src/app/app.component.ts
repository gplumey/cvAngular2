import { Component , ViewEncapsulation} from '@angular/core';
import { Routes , Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CvComponent } from './+cv/';
import { CompanyComponent } from './+company/';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    
    directives: [CvComponent, ROUTER_DIRECTIVES],
    encapsulation:ViewEncapsulation.None
})

@Routes([
        {path:"/", component:CvComponent},
        {path:"/company", component:CompanyComponent}])
export class AppComponent {
    title = 'Curriculum vitae';
    
    constructor(private _router:Router){
        
    }
}
