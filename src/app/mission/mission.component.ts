import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Mission} from '../domain//mission.interface';
import {CompanyService} from '../company.service';
import {Company} from '../domain/company.interface';

@Component({
  moduleId: module.id,
  selector: 'mission',
  templateUrl: 'mission.component.html',
  styleUrls: ['mission.component.css'],
  encapsulation : ViewEncapsulation.None
  //,  providers: [CompanyService]
})
export class MissionComponent implements OnInit {
  @Input("mission") public mission: Mission;

   constructor(private _compagnyService:CompanyService) { }

  ngOnInit() {
  }


  showCompany(id:number){
      if(id !==undefined){
          let company:Company = this._compagnyService.getCompany(id);
          this._compagnyService.setCurrentCompany(company);
          console.log("show : " + company.name);
      }
      
  }
}
