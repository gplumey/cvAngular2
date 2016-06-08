import { Injectable } from '@angular/core';
import { Company } from './domain/company.interface';

@Injectable()
export class CompanyService {
    private currentCompany:Company;
     private companies:Company[];
    constructor() {
        
         this.companies = new Array<Company>();
        this.companies.push({
            id:0,
            name:"Cegedim",
            detail: " Detail Cegedim ",
            url : "http://cegedim.com"
        });
        this.companies.push({
            id:1,
            name:"IMS Health",
            detail: " Detail IMS ",
            url : "http://imshealth.com"
        });
        
    }
  
    public getCompany(id:number):Company{
        return this.companies[id];
    }
  
    public setCurrentCompany(company:Company){
        this.currentCompany = company;
    }
  

}
