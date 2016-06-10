import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {Section} from '../../model/section.interface';

@Component({
    moduleId: module.id,
    selector: 'subsection',
    templateUrl: 'subsection.component.html',
    styleUrls: ['subsection.component.css'],
    encapsulation : ViewEncapsulation.None
})
export class SubsectionComponent implements OnInit {
    @Input("section") public section: Section;
    @Input("styleClass") public styleClass: string;

    constructor() { }

    ngOnInit() {
    }

}
