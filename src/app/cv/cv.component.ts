import { Component, OnInit } from '@angular/core';
import {CurriculumVitae} from '../domain/curriculumvitae.interface';
import {AddressComponent} from '../address/';
import {SectionComponent} from '../section/';
import {AgeComponent} from '../age/';
import {SkillComponent} from '../skill';
import {MissionComponent} from '../mission';

@Component({
  moduleId: module.id,
  selector: 'cv',
  templateUrl: 'cv.component.html',
  styleUrls: ['cv.component.css'],
  directives: [AddressComponent, SectionComponent, AgeComponent,
    SkillComponent, MissionComponent]

})
export class CvComponent implements OnInit {

  public cv: CurriculumVitae;

  constructor() {
    this.cv = {
      picture: "",
      firstName: "Guillaume",
      lastName: "Plumey",
      birthday: new Date("1982/02/24"),
      gender: "male",
      address: {
        streetNumber: "00",
        city: "XXXXX",
        streetLabel: "rue de la Xxxxxxxxx",
        zipcode: "XX240"
      },
      phoneNumber: "06 XX XX XX XX",
      email: "guillaume.plumey@gmail.com",
      permit: "Permis B",
      additionalSections: [{
        title: "Compétences linguistique",
        items: [
          { label: "Français", score: 1 },
          { label: "Anglais", score: 0.6 }]
      }, {
          title: "Centres d’intérêts",
          items: [
            { label: "Menuiserie", score: null },
            { label: "Volley ball", score: null }]
        }],
      sections: [{
        title: "Expérience professionelle",
        items: [
          { label: "Notification", date: "Depuis 1012", subject: "IMS Health" },
          { label: "ADR (Analytic data repository)", date: "2010 à 2012", subject: "Cegedim" },
          { label: "Maintence d'applications CRM", date: "2008 à 2010", subject: "Cegedim" }
        ]
      }, {
          title: "Formation",
          items: [
            { label: "Architecte logiciel", date: "2010 à 2012", subject: "ADR (Analitic data repository)" },
            { label: "Volley ball", date: "123", subject: "sss" }]
        }, {
          title: "Compétences technique",
          // type: SectionCONST.SKILLS;
          items: [
            { label: "J2EE", score: 0.8 },
            { label: "Hibernate", score: 0.8 },
            { label: "Spring framework", score: 0.8 },
            { label: "JSF/Primefaces", score: 1 },
            { label: "Oracle", score: 0.8 },
            { label: "Angular2", score: 0.4 },
            { label: "Jenkins", score: 0.4 }
          ]

        }]
      , professionTitle: "Architecte logiciel"
    };
  }
  ngOnInit() {
  }

}
