import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {Section} from '../../model/section.interface';
import {SubsectionComponent} from '../subsection/';

@Component({
  moduleId: module.id,
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css'],
  directives:[],
  encapsulation : ViewEncapsulation.None
})
export class SectionComponent implements OnInit {
  @Input("section") public section: Section;
  @Input("styleClass") public styleClass: string;
    
  constructor() {}

  ngOnInit() {
  }

}
