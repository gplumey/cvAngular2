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

@Component({
    moduleId: module.id,
    selector: 'sendmail',
    templateUrl: 'sendmail.component.html',
    styleUrls: ['sendmail.component.css'],
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_ICON_DIRECTIVES],
    providers: [Http, ConnectionBackend],
    viewProviders: [MdIconRegistry]
})
export class SendmailComponent implements OnInit {

    constructor(
        private _title: Title,
        private _router: Router) { }

    ngOnInit() {
    }

    public send() {

    }

    public return() {
        this._router.navigate(['/']);
    }

}
