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
                //streetNumber: "00",
                city: "Cormeilles-en-Parisis",
                //streetLabel: "rue de la Xxxxxxxxx",
                zipcode: "95240"
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
                    { label: "Notification", date: "Depuis 1012", company: "IMS Health", 
                      subject: "Développement de Notification, plateforme réglementaire destinée à la transparence des laboratoires pharmaceutique.", 
                      environment : "Java/J2EE, Spring, Spring security, Spring batch, JSF 2.0, Primefaces, Hibernate, Javascript, Jquery, Oracle, Apache, Jboss 6, Maven 2, Selenium, Jenkins" },
                    { label: "ADR (Analytic data repository)", date: "2010 à 2012", company: "Cegedim", 
                      subject: "Développement de Analytics Data Repository, logiciel d’administration de data wharehouses et datamarts destinés à la BI<",
                      environment : "Java/J2EE, Spring, Spring security, JSF 2.0, Hibernate, Javascript, Jquery, Oracle et SqlServer, Apache, Tomcat 6, Maven 2" },
                    { label: "Applications CRM", date: "2008 à 2010", company: "Cegedim",
                      subject : "Développement et maintenance de Atlas et OneUp, logiciels aidant les laboratoires pharmaceutiques à organiser les événements promotionnels et à gérer l’activité des visiteurs médicaux.",
                      environment : "Java/J2EE, Flex 4, Oracle, Apache, Jboss 4, Maven" }
                ]
            }, {
                    title: "Formation",
                    items: [
                        { label: "Méthode Agile", date: "2016", company: "Linda" },
                        { label: "Architecture logicielle", date: "2015" , company: "Valtech", duration : "5 jours"},
                        { label: "Flex 4", date: "2010", company: "BaaO", duration : "4 jours" },
                        { label: "Oracle : Développer en PL/SQL", date: "2008",company: "Orsys", duration : "3 jours" },
                        { label: "Java/J2EE", date: "2007",company: "Sodifrance", duration : "2 mois" },
                        { label: "Master I.M.A. (Génie informatique) ", date: "2002 à 2007",company: "UFR La Rochelle" }]
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

                }],
            professionTitle: "Leader technique",
            professionSubTitle: "Java - Spring - J2EE"
        };
    }
    ngOnInit() {
    }

}
