import { Component, OnInit, Input } from '@angular/core';
import {I18nSelectPipe} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'age',
  templateUrl: 'age.component.html'
})
export class AgeComponent implements OnInit {
  @Input("birthday") public birthday: Date;
  @Input("gender") public gender: string;

  birthdayMap: { [key: string]: string } = {
    'male': 'Né le',
    'female': 'Née le'
  }


  getYears() {
    var date = new Date();

    return date.getFullYear() - this.birthday.getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
