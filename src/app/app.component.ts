import { Component , ViewEncapsulation} from '@angular/core';
import { Routes , Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CvComponent } from './+cv/';
import { CompanyComponent } from './+company/';
import { SendmailComponent } from './+sendmail/';

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
        {path:"/company", component:CompanyComponent},
        {path:"/sendmail", component:SendmailComponent}
        ])
export class AppComponent {
    title = 'Curriculum vitae';
    
    constructor(private _router:Router, private _title:Title){
        this._title.setTitle(this.title);
    }
}
