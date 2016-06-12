import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import { Title } from '@angular/platform-browser';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { Company } from '../model/company.interface';
import { CompanyService } from '../services/company.service';

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

    constructor(
        private _companyService: CompanyService,
        private _params: RouteSegment,
        private _router: Router,
        private _title: Title) {

        this._id = Number(_params.getParam("id"));

        if (this._id !== undefined) {
            this.company = this._companyService.getCompany(this._id);
            this._title.setTitle(this.company.name);
        }
    }


    ngOnInit() {
    }


    public return() {
        this._router.navigate(['/']);
    }

}
