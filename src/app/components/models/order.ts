export class Order{

    food?:{
        id:number;
        name:string,
        price:number,
        ingredients?:string[],
        description?:string
    }[]

    drink?:{
        id:number;
        name:string,
        price:number,
        type?:string,
        description?:string        
    }[]

    candy?:{
        id:number;
        name:string,
        price:number,
        type:string
    }[]
}