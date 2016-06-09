import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Company } from '../domain/company.interface';
import { CompanyService } from '../company.service';

@Component({
    moduleId: module.id,
    selector: 'company',
    templateUrl: 'company.component.html',
    styleUrls: ['company.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
    company: Company;
    private _id: number;
    constructor(private _companyService: CompanyService, private _params: RouteSegment, private _router: Router) {
        console.log(
        _params.getParam("id"))
        this._id = Number(_params.getParam("id"));
        console.log(this._id);
        if (this._id !== undefined) {
            this.company = this._companyService.getCompany(this._id);
        console.log(this.company);
    }
        
    }

    ngOnInit() {
    }


    public return() {
        this._router.navigate(['/']);
    }

}
