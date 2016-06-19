// Angular
import { Component, OnInit } from '@angular/core';
import { Http, ConnectionBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

//Material design
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES  } from '@angular2-material/input';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox'

import {SkillComponent} from '../components/skill';
import {CvService} from '../services/cv.service';
import { Skill } from '../model/skill.interface';
import { Mail } from '../model/mail';

import {CommonMail} from 'cv-common/dist';

@Component({
    moduleId: module.id,
    selector: 'sendmail',
    templateUrl: 'sendmail.component.html',
    styleUrls: ['sendmail.component.css'],
    directives: [SkillComponent,
        MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_ICON_DIRECTIVES, MD_CHECKBOX_DIRECTIVES],
    providers: [Http, ConnectionBackend, CvService],
    viewProviders: [MdIconRegistry]
})
export class SendmailComponent implements OnInit {
    skills: Skill[];

    mail: Mail = new CommonMail();

    constructor(
        private _title: Title,
        private _router: Router,
        private _cvService: CvService) { }

    ngOnInit() {
        this.skills = this._cvService.getSkills(0);
        console.log(this.skills);
    }

    public send() {
        console.log(this.mail);
    }

    public return() {
        this._router.navigate(['/']);
    }

}
