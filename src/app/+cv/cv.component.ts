/// <reference path="jspdf.d.ts" />
import { Component, OnInit, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import {CurriculumVitae} from '../model/curriculumvitae.interface';
import {AddressComponent} from '../components/address/';
import {SectionComponent} from './section/';
import {AgeComponent} from './age/';
import {SkillComponent} from '../components/skill';
import {MissionComponent} from './mission';
import {SubsectionComponent} from './subsection';
import {CompanyService } from '../services/company.service';
import {CvService } from '../services/cv.service';


@Component({
    moduleId: module.id,
    selector: 'cv',
    templateUrl: 'cv.component.html',
    styleUrls: ['cv.component.css'],
    directives: [AddressComponent, SectionComponent, AgeComponent,
        SkillComponent, MissionComponent, SubsectionComponent],
    providers: [CompanyService, CvService]


})
export class CvComponent implements OnInit {


    public cv: CurriculumVitae;

    constructor(
        private _cvService: CvService,
        private _myElement: ElementRef,
        private _title: Title,
        private _router: Router) {

    }
    ngOnInit() {

        this.cv = this._cvService.read(0);
        this._title.setTitle("CV " + this.cv.firstName + " " + this.cv.lastName);

    }

    download() {

        let doc = new jsPDF();
        doc.fromHTML(this._myElement.nativeElement, 0, 0, {
            'width': 800,
        });
        doc.save("Test.pdf");
    }


    contactMe() {
        this._router.navigate(["/sendmail"]);
    }




}
