export interface Section {
    type?: string;
    title: string;
    items?: any[];
    sections?: Section[];
}