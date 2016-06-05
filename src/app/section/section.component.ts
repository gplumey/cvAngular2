import { Component, OnInit, Input } from '@angular/core';
import {Section} from '../domain/section.interface';

@Component({
  moduleId: module.id,
  selector: 'section',
  templateUrl: 'section.component.html',
  styleUrls: ['section.component.css']
})
export class SectionComponent implements OnInit {
  @Input("section") public section: Section;
  @Input("styleClass") public styleClass: string;
    
  constructor() {}

  ngOnInit() {
  }

}
