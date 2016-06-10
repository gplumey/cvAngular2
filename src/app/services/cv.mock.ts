import {Section} from '../model/section.interface';
import {CurriculumVitae} from '../model/curriculumvitae.interface';


export var SKILLS_SECTION:Section[] = [{
                    title: "Langages",
                    items: [
                        { label: "Java", score: 1 },
                        { label: "PL/SQL", score: 0.8 },
                        { label: "HTML5/CSS3", score: 0.8 },
                        { label: "Javascript", score: 0.7 },
                        { label: "TypdeScript", score: 0.5 }
                    ]
                }, {
                    title: "Côté serveur",
                    items: [
                        { label: "J2EE", score: 0.8 },
                        { label: "Hibernate", score: 0.8 },
                        { label: "Spring core", score: 0.8 },
                        { label: "Spring AOP", score: 0.8 },
                        { label: "Spring security", score: 0.8 },
                        { label: "Spring batch", score: 0.8 }
                    ]
                }, {
                    title: "Web services",
                    items: [
                        { label: "Rest", score: 0.8 },
                        { label: "Soap", score: 0.8 }
                    ]
                }, {
                    title: "Côté client",
                    items: [
                        { label: "JSF 2/Primefaces", score: 0.8 },
                        { label: "Angular2", score: 0.4 },
                        { label: "jQuery", score: 0.6 }
                    ]
                }, {
                    title: "Base de données",
                    items: [
                        { label: "Oracle", score: 0.8 },
                        { label: "SQL Server", score: 0.5 }
                    ]
                }, {
                    title: "Méthodes",
                    items: [
                        { label: "Agile/SCRUM", score: 0.6 },
                        { label: "XP", score: 0.4 },
                        { label: "TDD", score: 0.7 }
                    ]
                }, {
                    title: "Outils",
                    items: [
                        { label: "Eclipse", score: 0.6 },
                        { label: "Svn", score: 0.6 },
                        { label: "Git", score: 0.6 },
                        { label: "JIRA", score: 0.4 }
                    ]
                }, {
                    title: "Tests et Integration continue",
                    items: [
                        { label: "Maven", score: 0.6 },
                        { label: "JUnit", score: 0.8 },
                        { label: "Jenkins", score: 0.4 },
                        { label: "Selenium", score: 0.7 }
                    ]
                }
            ];


 

export var CV: CurriculumVitae = {
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
    //phoneNumber: "06 XX XX XX XX",
    email: "guillaume.plumey@gmail.com",
    permit: "Permis B",
    additionalSections: [{
        title: "Compétences linguistiques",
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
            {
                label: "Notification", date: "Depuis 2012", company: "IMS Health", companyId: 1,
                subject: "Mise en place de l'architecture et développement de Notification, plateforme réglementaire destinée à la transparence des laboratoires pharmaceutique.",
                environment: "Java/J2EE, Spring, Spring security, Spring batch, JSF 2.0, Primefaces, Hibernate, RestEasy, Soap, Javascript, Jquery, Oracle, Apache, Jboss 6, Maven 2, Selenium, Jenkins"
            },
            {
                label: "ADR (Analytic data repository)", date: "2010 à 2012", company: "Cegedim", companyId: 0,
                subject: "Développement de Analytics Data Repository, logiciel d’administration de data wharehouses et datamarts destinés à la BI.",
                environment: "Java/J2EE, Spring, Spring security, JSF 2.0, Hibernate, Javascript, Jquery, Oracle et SQL Server, Apache, Tomcat 6, Maven 2"
            },
            {
                label: "Applications CRM", date: "2008 à 2010", company: "Cegedim", companyId: 0,
                subject: "Développement et maintenance de Atlas et OneUp, logiciels aidant les laboratoires pharmaceutiques à organiser les événements promotionnels et à gérer l’activité des visiteurs médicaux.",
                environment: "Java/J2EE, Flex 4, Oracle, Apache, Jboss 4, Maven"
            }
        ]
    }, {
            title: "Formation initiale",
            items: [{ label: "Master I.M.A. (Génie informatique) ", date: "2002 à 2007", company: "UFR La Rochelle" }]
        }, {
            title: "Formation continue",
            items: [
                { label: "Méthode Agile", date: "2016", company: "Linda" },
                { label: "Architecture logicielle", date: "2015", company: "Valtech", duration: "5 jours" },
                { label: "Flex 4", date: "2010", company: "BaaO", duration: "4 jours" },
                { label: "Oracle : Développer en PL/SQL", date: "2008", company: "Orsys", duration: "3 jours" },
                { label: "Java/J2EE", date: "2007", company: "Sodifrance", duration: "2 mois" }]
        }, {
            title: "Compétences techniques",
            // type: SectionCONST.SKILLS;
            sections: SKILLS_SECTION// SKILLS_SECTION
        }],
    professionTitle: "Architecte logicielle - Leader technique",
    professionSubTitle: "Java - Spring - J2EE"
};