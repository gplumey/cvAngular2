import { Injectable } from '@angular/core';
import { Company } from '../model/company.interface';

@Injectable()
export class CompanyService {
    private currentCompany: Company;
    private companies: Company[];
    constructor() {

        this.companies = new Array<Company>();
        this.companies.push({
            id: 0,
            name: "Cegedim",
            detail: " Detail Cegedim ",
            url: "http://cegedim.com",
            image: "img/cegedimlogo.png"
        });
        this.companies.push({
            id: 1,
            name: "IMS Health",
            detail: "IMS Health est une entreprise américaine de conseils pour l’industrie du médicament et les acteurs de la santé.",
            url: "http://imshealth.com",
            image: "img/IMSHlogo2015.png"
        });

    }

    public getCompany(id: number): Company {
        return this.companies[id];
    }

    public setCurrentCompany(company: Company) {
        this.currentCompany = company;
    }


}
