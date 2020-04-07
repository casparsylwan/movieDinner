export class Customer{

    id:number;
    name?:string;
    date:string;
    movie:string;
    contact?:string;
    seat?:number;
    candy?:string[] = new Array();
    food?:string[] = new Array();;
    drinks?:string[] = new Array();
    orderList:{name:string, price:number}[] = new Array();
    totalSum:number;

}