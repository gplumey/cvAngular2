import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {Section} from '../domain/section.interface';

@Component({
  moduleId: module.id,
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SectionComponent implements OnInit {
  @Input("section") public section: Section;
  @Input("styleClass") public styleClass: string;
    
  constructor() {}

  ngOnInit() {
  }

}
