import {Address} from "./address.interface";
import {Section} from "./section.interface";

export interface CurriculumVitae {
    firstName:string;
    lastName:string;
    birthday:Date;
    gender:string;
    picture:string;
    address:Address;
    phoneNumber?:string;
    email:string;
    permit:string;
    additionalSections: Section[];
    sections: Section[];
    professionTitle:string;
    professionSubTitle:string;
}
