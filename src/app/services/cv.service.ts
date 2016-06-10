import { Injectable } from '@angular/core';
import {CurriculumVitae} from '../model/curriculumvitae.interface';
import {Skill} from '../model/skill.interface';

import {CV, SKILLS_SECTION} from './cv.mock';

@Injectable()
export class CvService {
  private _cv: CurriculumVitae;

  constructor() { }


  public read(id: number): CurriculumVitae {
    return CV;
  }


  public getSkills(id: number): Skill[] {
    let skills: Skill[] = [];
    SKILLS_SECTION.forEach((section: any) => {
      section.items.forEach((skill: Skill) => {
        skills.push(skill)
      });
    });
    return skills;
  }


}

