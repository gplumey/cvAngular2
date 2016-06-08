import { Component, OnInit } from '@angular/core';
import {Company } from '../domain/company.interface';

@Component({
  moduleId: module.id,
  selector: 'app-company',
  templateUrl: 'company.component.html',
  styleUrls: ['company.component.css']
})
export class CompanyComponent implements OnInit {
  
    private company:Company;
    
  constructor() {
     
      
      
  }

  ngOnInit() {
  }

  

}
