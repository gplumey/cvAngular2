import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../domain/skill.interface';

@Component({
  moduleId: module.id,
  selector: 'skill',
  templateUrl: 'skill.component.html',
  styleUrls: ['skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input("skill") public skill: Skill;
  stars: number[] = [1, 2, 3, 4, 5];


  public getStartIcon(index: number) {
    if (this.skill.score > 0 && this.skill.score * this.stars.length >= index) {
      return "star";
    } else {
      return "star-o";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
