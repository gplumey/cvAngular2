import { Component, OnInit } from '@angular/core';

import { MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox'


@Component({
  moduleId: module.id,
  selector: 'selector',
  templateUrl: 'selector.component.html',
  styleUrls: ['selector.component.css'],
  directives: [MD_CHECKBOX_DIRECTIVES]
})
export class SelectorComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onClick() {
    //this.selected = !this.selected;
  }
}
