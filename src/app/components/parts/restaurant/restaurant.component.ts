import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  //Customer info
  @Input() customers:Customer[];
  @Input() checkout:boolean;
  @Output() customersEvent = new EventEmitter();
  @Output() checkoutEvent = new EventEmitter();
  seat:number = -1;
  id:number = -1;
  totalSum:number;
  

  state:number=0;

  foodList:{name:string, price:number}[] = [{name:"Hamburgare",price: 65}, {name:"Vegodelux", price: 85}, {name:"Pizza", price: 97}, {name:"Padthai",price:65}];

  drinkList: {name:string, price:number}[] = [{name:"Zingo", price:20}, {name:"Pepsi", price:25 },{name:"Cuba-Cola",price: 15}, {name:"Juice", price:10}];

  candyList:{name:string, price:number}[] = [{name:"Bilar", price:20 },{name:"Hallon båtar ", price:15 }, {name:"Popcorn XXL", price:35 },{name:"Popcorn Medium", price:15 }, {name:"Popcorn liten", price:15 }]

  resturantHeading:string = "Mat, dryck och godis"
  subHeading:string ="Välj stol att beställa till på knappen här under!";

  constructor() { }

  ngOnInit(): void {
  }

  isFliped:string = "card";

  flip(state:number){
    console.log(this.customers);
    this.state = state;

    if(this.isFliped === "card"){
      this.isFliped = "card is-flipped";
    }else{
      this.isFliped="card"
    }
  }

 public changeState(state:number){

  this.state = state;

  console.log(state);
  this.isFliped = "card is-Spinning";

  console.log(this.isFliped);

 }

 public getCustomer(seat:number, index:number){
   
   this.seat = seat;
   this.id = index;
   this.subHeading = "Beställ mat till stol:" + seat;
   
   
 }

  
  public buyCandy(candy:any){

    console.log(candy);
    console.log(this.customers )
    console.log(this.customers[this.id].orderList)
    this.customers[this.id].orderList.push(candy);
    this.customers[this.id].calcOrderSum(); 
    this.calcTotalSum()
     this.customersEvent.emit(this.customers);
    
  }

  public removeCandy(candy:any){

    console.log(candy);
    
    let index = this.customers[this.id].orderList.indexOf(candy);
    if(index != -1){
      this.customers[this.id].orderList.splice(index, 1);
      this.customers[this.seat].calcOrderSum();
      this.calcTotalSum()
      this.customersEvent.emit(this.customers);
    }
  
  }


  public buyFood(food:any){

    console.log(this.customers);
    this.customers[this.id].orderList.push(food);
    this.customers[this.id].calcOrderSum();
    this.calcTotalSum()
    this.customersEvent.emit(this.customers); 

    
    
  }

  public removeFood(food:any){

    console.log(food);

    let index = this.customers[this.id].orderList.indexOf(food);
    console.log(index);
    if(index !=-1){

      this.customers[this.id].orderList.splice( index, 1);
      this.customers[this.id].calcOrderSum();
      this.calcTotalSum()
      this.customersEvent.emit(this.customers);
    }
    
    
  }

  public buyDrinks(drinks:any){

    console.log(drinks)

    
    this.customers[this.id].orderList.push(drinks);
    this.customers[this.id].calcOrderSum();
    this.calcTotalSum()
    this.customersEvent.emit(this.customers);
    
  }

  public removeDrinks(drinks:any){

    console.log(drinks)

    
    let index = this.customers[this.id].orderList.indexOf(drinks);
    if(index != -1){
      this.customers[this.id].orderList.splice(index, 1);
      this.customers[this.id].calcOrderSum();
    }
    
    this.calcTotalSum()
    this.customersEvent.emit(this.customers);
    
  }

  public calcTotalSum(){

    this.totalSum = 0;
    this.customers.forEach(customer => this.totalSum = this.totalSum + customer.totalSum) 

  }

  public checkoutcustomer(){

    console.log("hejhej")
    this.checkout = true;
    this.checkoutEvent.emit(this.checkout);
    this.customersEvent.emit(this.customers);
    
  }

  

}
