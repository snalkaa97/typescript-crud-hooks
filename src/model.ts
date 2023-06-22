
export type ContactInfo = {
    email: string;
    phone: string;
}
export interface Data {
    id?: number;
    name: string;
    contactInfo: ContactInfo;
}

export interface DataInput {
    id?: number,
    name:string;
    email:string;
    phone:string;
}

export const initialData:DataInput = {
    id: 0,
    name: '',
    email: '',
    phone: ''
}


export type ArrayData = Array<Data>;
export const arrayData:ArrayData = [];
