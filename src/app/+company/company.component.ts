import { Component, OnInit } from '@angular/core';
import { Router , RouteSegment} from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Company } from '../domain/company.interface';
import { CompanyService } from '../company.service';

@Component({
    moduleId: module.id,
    selector: 'company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    providers:[CompanyService]
})
export class CompanyComponent implements OnInit {
    company: Company;
    private _id:number;
    constructor(private _companyService:CompanyService, _router: RouteSegment) {
        
       this._id = Number( _router.getParam("id"));
       console.log(this._id);
     }

    ngOnInit() {
    }

}
