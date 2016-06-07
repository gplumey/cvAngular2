import { Component, OnInit ,ElementRef} from '@angular/core';
import {CurriculumVitae} from '../domain/curriculumvitae.interface';
import {AddressComponent} from '../address/';
import {SectionComponent} from '../section/';
import {AgeComponent} from '../age/';
import {SkillComponent} from '../skill';
import {MissionComponent} from '../mission';
import {SubsectionComponent} from '../subsection';

declare class jsPDF {
    constructor(orientation?:any,
                unit?:string,
                format?:string,
                compressPdf?:number);

    CapJoinStyles:any;
    version:string;

    internal: {
        'pdfEscape'(text:string, flags:any): any;
        'getStyle'(style:string) : any;
        'getFont'(): any;
        'getFontSize'():number;
        'getLineHeight'():number;
        'write'(string1:string):any;
        'getCoordinateString'(value:number):number;
        'getVerticalCoordinateString'(value:number):number;
        'collections':any;
        'newObject'():number;
        'newAdditionalObject'():any;
        'newObjectDeferred'():number;
        'newObjectDeferredBegin'(oid:number):void;
        'putStream'(str:string):void;
        'events':any;
        'scaleFactor':number;
        'pageSize': {
            width:number;
            height:number;
        };
        'output'(type:any, options:any):any;
        'getNumberOfPages'():number;
        'pages':number[];
        'out'(string:string):void;
        'f2'(number:number):number;
        'getPageInfo'(pageNumberOneBased:number):any;
        'getCurrentPageInfo'():any;
    };
    addPage():jsPDF;
    setPage(n:number):jsPDF;
    insertPage(beforePage:number):jsPDF;
    movePage(targetPage:number, beforePage:number):jsPDF;
    deletePage(n:number):jsPDF;
    setDisplayMode(zoom?:string, layout?:string, pmode?:string):jsPDF;
    text(text:any, x:any, y:any, flags?:any, angle?:any, align?:any):jsPDF;
    lstext(text:string, x:number, y:number, spacing:number):jsPDF;
    line(x1:number, y1:number, x2:number, y2:number):any;
    clip():void;
    lines(lines:any, x:any, y:any, scale?:any, style?:string, closed?:boolean):jsPDF;
    rect(x:number, y:number, w:number, h:number, style?:string):jsPDF;
    triangle(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number, style:string):jsPDF;
    roundedRect(x:number, y:number, w:number, h:number, rx:number, ry:number, style:string):jsPDF;
    ellipse(x:number, y:number, rx:number, ry:number, style?:string):jsPDF;
    circle(x:number, y:number, r:number, style:string):jsPDF;
    setProperties(properties:any):jsPDF;
    setFontSize(size:number):jsPDF;
    setFont(fontName?:string, fontStyle?:string):jsPDF;
    setFontStyle(style:string):jsPDF;
    setFontType(style:string):jsPDF;
    getFontList():any;
    addFont(postScriptName:string, fontName:string, fontStyle:string):string;
    setLineWidth(width:number):jsPDF;
    setDrawColor(ch1:number|string, ch2?:number, ch3?:number, ch4?:number):jsPDF;
    setFillColor(ch1:number|string, ch2?:number, ch3?:number, ch4?:number):jsPDF;
    setTextColor(r?:number, g?:number, b?:number):jsPDF;
    setLineCap(style:string|number):jsPDF;
    setLineJoin(style:string|number):jsPDF;
    output(type?:string, options?:any):any;
    save(filename:string):jsPDF;

    /**
     * jsPDF plugins below:
     *
     *  - AddHTML
     *  - AddImage
     *  - Annotations
     *  - AutoPrint
     *  - Canvas
     *  - Cell
     *  - Context2D
     *  - FromHTML
     *  - JavaScript
     *  - PNG
     *  - split_text_to_size
     *  - SVG
     *  - total_pages
     */

    // jsPDF plugin: addHTML
    addHTML(element:any, x:number, y:number, options:any, callback:Function):jsPDF;
    addHTML(element:any, callback:Function):jsPDF;

    // jsPDF plugin: addImage
    color_spaces:any;
    decode:any;
    image_compression:any;

    sHashCode(str:string):any;
    isString(object:any):boolean;
    extractInfoFromBase64DataURI(dataURI:string):any[];
    supportsArrayBuffer():boolean;
    isArrayBuffer(object:any):boolean;
    isArrayBufferView(object:any):boolean;
    binaryStringToUint8Array(binary_string:string):Uint8Array;
    arrayBufferToBinaryString(buffer:any):string;
    arrayBufferToBase64(arrayBuffer:ArrayBuffer):string;
    createImageInfo(data:any, wd:any, ht:any, cs:any, bpc:any, imageIndex:number, alias:any, f?:any, dp?:any, trns?:any, pal?:any, smask?:any):any;
    addImage(imageData?:any, format?:any, x?:number, y?:number, w?:number, h?:number, alias?:any, compression?:any, rotation?:any):jsPDF;
    processJPEG(data:any, index:number, alias:any, compression?:any, dataAsBinaryString?:string):any;
    processJPG():any;

    // jsPDF plugin: Annotations
    annotationPlugin:any;
    createAnnotation(options:any):void;
    link(x:number, y:number, w:number, h:number, options:any):void;
    textWithLink(text:string, x:number, y:number, options:any):number;
    getTextWidth(text:string):number;
    getLineHeight():number;

    // jsPDF plugin: AutoPrint
    autoPrint():jsPDF;

    // jsPDF plugin: Canvas
    canvas: {
        getContext():any;
        style:any;
    };

    // jsPDF plugin: Cell
    setHeaderFunction(func:Function):void;
    getTextDimensions(txt:string):any;
    cellAddPage():void;
    cellInitialize():void;
    cell(x:number, y:number, w:number, h:number, txt:string, ln:number, align:string):jsPDF;
    arrayMax(array:any[], comparisonFn?:Function):number;
    table(x:number, y:number, data:any, headers:string[], config:any):jsPDF;
    calculateLineHeight(headerNames:string[], columnWidths:number[], model:any[]):number;
    setTableHeaderRow(config:any[]):void;
    printHeaderRow(lineNumber:number, new_page?:boolean):void;

    // jsPDF plugin: Context2D
    context2d: {
        pageWrapXEnabled: boolean;
        pageWrapYEnabled: boolean;
        pageWrapX: number;
        pageWrapY: number;
        f2(number:number):number;
        fillRect(x:number, y:number, w:number, h:number):void;
        strokeRect(x:number, y:number, w:number, h:number):void;
        clearRect(x:number, y:number, w:number, h:number):void;
        save():void;
        restore():void;
        beginPath():void;
        closePath():void;
        setFillStyle(style:string):void;
        setStrokeStyle(style:string):void;
        fillText(text:string|string[], x:number, y:number, maxWidth:number):void;
        strokeText(text:string|string[], x:number, y:number, maxWidth:number):void;
        setFont(font:string):void;
        setTextBaseline(baseline:string):void;
        getTextBaseline():string;
        setLineWidth(width:number):void;
        setLineCap(style:string):void;
        setLineJoin(style:string):void;
        moveTo(x:number, y:number):void;
        lastBreak: number;
        pageBreaks: any[];
        lineTo(x:number, y:number):void;
        bezierCurveTo(x1:number, y1:number, x2:number, y2:number, x:number, y:number):void;
        quadraticCurveTo(x1:number, y1:number, x:number, y:number):void;
        arc(x:number, y:number, radius:number, startAngle:number, endAngle:number, anticlockwise:any):void;
        drawImage(img:string, x:number, y:number, w:number, h:number, x2?:number, y2?:number, w2?:number, h2?:number):void;
        stroke():void;
        fill():void;
        translate(x:number, y:number):void;
        measureText(text:string):number;
    };

    // jsPDF plugin: fromHTML
    fromHTML(HTML:string | HTMLElement, x:number, y:number, settings?:any, callback?:Function, margins?:any):jsPDF;

    // jsPDF plugin: JavaScript
    addJS(txt:string):jsPDF;

    // jsPDF plugin: PNG
    processPNG(imageData:any, imageIndex:number, alias:string, compression:any, dataAsBinaryString:string):any;

    // jsPDF plugin: split_text_to_size
    getCharWidthsArray(text:string, options?:any):any[];
    getStringUnitWidth(text:string, options?:any):number;
    splitTextToSize(text:string, maxlen:number, options?:any):any;

    // jsPDF plugin: SVG
    addSVG(svgtext:string, x:number, y:number, w?:number, h?:number):jsPDF;

    // jsPDF plugin: total_pages
    putTotalPages(pageExpression:string):jsPDF;
}

@Component({
    moduleId: module.id,
    selector: 'cv',
    templateUrl: 'cv.component.html',
    styleUrls: ['cv.component.css'],
    directives: [AddressComponent, SectionComponent, AgeComponent,
        SkillComponent, MissionComponent, SubsectionComponent]

})
export class CvComponent implements OnInit {

    public cv: CurriculumVitae;
    private _myElement: ElementRef;
    constructor(_myElement: ElementRef) {
        this._myElement = _myElement;
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
                    { label: "Notification", date: "Depuis 1012", company: "IMS Health", 
                      subject: "Développement de Notification, plateforme réglementaire destinée à la transparence des laboratoires pharmaceutique.", 
                      environment : "Java/J2EE, Spring, Spring security, Spring batch, JSF 2.0, Primefaces, Hibernate, Javascript, Jquery, Oracle, Apache, Jboss 6, Maven 2, Selenium, Jenkins" },
                    { label: "ADR (Analytic data repository)", date: "2010 à 2012", company: "Cegedim", 
                      subject: "Développement de Analytics Data Repository, logiciel d’administration de data wharehouses et datamarts destinés à la BI.",
                      environment : "Java/J2EE, Spring, Spring security, JSF 2.0, Hibernate, Javascript, Jquery, Oracle et SqlServer, Apache, Tomcat 6, Maven 2" },
                    { label: "Applications CRM", date: "2008 à 2010", company: "Cegedim",
                      subject : "Développement et maintenance de Atlas et OneUp, logiciels aidant les laboratoires pharmaceutiques à organiser les événements promotionnels et à gérer l’activité des visiteurs médicaux.",
                      environment : "Java/J2EE, Flex 4, Oracle, Apache, Jboss 4, Maven" }
                ]
            }, {
                    title: "Formation initiale",
                    items: [{ label: "Master I.M.A. (Génie informatique) ", date: "2002 à 2007",company: "UFR La Rochelle" }]   
            }, {
                    title: "Formation continue",
                    items: [
                        { label: "Méthode Agile", date: "2016", company: "Linda" },
                        { label: "Architecture logicielle", date: "2015" , company: "Valtech", duration : "5 jours"},
                        { label: "Flex 4", date: "2010", company: "BaaO", duration : "4 jours" },
                        { label: "Oracle : Développer en PL/SQL", date: "2008",company: "Orsys", duration : "3 jours" },
                        { label: "Java/J2EE", date: "2007",company: "Sodifrance", duration : "2 mois" }]
                }, {
                    title: "Compétences techniques",
                    // type: SectionCONST.SKILLS;
                    sections:[{
                        title:"Langages",
                        items: [
                            { label: "Java", score: 1 },
                            { label: "PL/SQL", score: 0.8 },
                            { label: "HTML5/CSS3", score: 0.8 },
                            { label: "Javascript", score: 0.7 },
                            { label: "TypdeScript", score: 0.5 }
                        ]},{
                        title:"Côté serveur",
                        items: [
                            { label: "J2EE", score: 0.8 },
                            { label: "Hibernate", score: 0.8 },
                            { label: "Spring core", score: 0.8 },
                            { label: "Spring aop", score: 0.8 },
                            { label: "Spring security", score: 0.8 },
                            { label: "Spring batch", score: 0.8 }
                        ]},{
                        title:"Web services",
                        items: [
                            { label: "RestEasy", score: 0.8 },
                            { label: "Soap", score: 0.8 }
                        ]},{
                        title:"Côté client",
                        items: [
                            { label: "JSF 2/Primefaces", score: 1 },
                            { label: "Angular2", score: 0.4 },
                            { label: "jQuery", score: 0.6 }
                        ]},{
                        title:"Base de données",
                        items: [
                            { label: "Oracle", score: 0.8 },
                            { label: "sqlServer", score: 0.5 }
                        ]},{
                        title:"Integration continue",
                        items: [
                            { label: "Maven", score: 0.6 },
                            { label: "Jenkins", score: 0.4 },
                            { label: "Selenium", score: 0.7 }
                        ]}
                       ]

                }],
            professionTitle: "Ingénieur en développement - Leader technique",
            professionSubTitle: "Java - Spring - J2EE"
        };
    }
    ngOnInit() {
    }
    
    download(){
      
        let doc = new jsPDF();
        doc.fromHTML(this._myElement.nativeElement,0,0, {
        'width': 800,
    });
    doc.save("Test.pdf");
    }
}
