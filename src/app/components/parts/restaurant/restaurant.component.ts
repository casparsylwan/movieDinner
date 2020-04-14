import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class RestaurantComponent implements OnInit {

   // Get screenSize
   screenSize:number;
   width:number = window.innerWidth;
   height:number = window.innerHeight;

 
   onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
}



  //Customer info
  @Input() customers:Customer[];
  @Input() checkout:boolean;
  @Output() customersEvent = new EventEmitter();
  @Output() checkoutEvent = new EventEmitter();
  seat:number = -1;
  id:number = -1;
  totalSum:number;

  //classe names
  btn:string ="btn checkout";
  btnActive:string = "btn checkout active";
  

  state:number=0;

  foodList:{name:string, price:number}[] = [{name:"Hamburgare",price: 65}, {name:"Vegodelux", price: 85}, {name:"Pizza", price: 97}, {name:"Padthai",price:65}];

  drinkList: {name:string, price:number}[] = [{name:"Zingo", price:20}, {name:"Pepsi", price:25 },{name:"Cuba-Cola",price: 15}, {name:"Juice", price:10}];

  candyList:{name:string, price:number}[] = [{name:"Bilar", price:20 },{name:"Hallon båtar ", price:15 }, {name:"Popcorn XXL", price:35 },{name:"Popcorn Medium", price:15 }, {name:"Popcorn liten", price:15 }]

  resturantHeading:string = "Mat, dryck och godis"
  subHeading:string ="Välj stol att beställa till på knappen här under!";

  constructor() { }

  ngOnInit(): void {
    if(this.customers == null){
      this.forDevOnly();
    }    
  }

  public forDevOnly(){

    let customer:Customer = new Customer();
    let customer2:Customer = new Customer();
    customer.id = 0;
    customer.seat = 0;
    customer2.seat = 1;
    this.customers = [customer, customer2];

  }

  isFliped:string = "card";

  flip(state:number){

    this.state = state;

    if(this.isFliped === "card"){
      this.isFliped = "card is-flipped";
    }else{
      this.isFliped="card"
    }
  }

 public changeState(state:number){

  this.state = state;

  this.isFliped = "card is-Spinning";

 }


 public getCustomer(seat:number, index:number){
   
  if(this.id === index){

    this.seat = -1;
    this.id = -1;
    this.subHeading ="Välj stol att beställa till på knappen här under!";

  }else{

    this.seat = seat;
    this.id = index;
    this.subHeading = "Beställ mat till stol: " + seat;

    }   
 }

  
  public buyCandy(candy:any){

    console.log("hej");
    console.log(candy);
    this.customers[this.id].orderList.push(candy);
    this.customers[this.id].calcOrderSum(); 
    this.calcTotalSum()
     this.customersEvent.emit(this.customers);
    
  }

  public removeCandy(candy:any){
    console.log(candy);
    let index = this.customers[this.id].orderList.indexOf(candy);
    if(index != -1){
      console.log(this.customers[this.id])
      this.customers[this.id].orderList.splice(index, 1);
      this.customers[this.id].calcOrderSum();
      this.calcTotalSum()
      this.customersEvent.emit(this.customers);
    }
    this.calcTotalSum()
  
  }


  public buyFood(food:any){

    this.customers[this.id].orderList.push(food);
    this.customers[this.id].calcOrderSum();
    this.calcTotalSum()
    this.customersEvent.emit(this.customers);   
  }

  public removeFood(food:any){

    let index = this.customers[this.id].orderList.indexOf(food);

    if(index !=-1){

      this.customers[this.id].orderList.splice( index, 1);
      this.customers[this.id].calcOrderSum();
      this.calcTotalSum()
      this.customersEvent.emit(this.customers);
    }
    
    
  }

  public buyDrinks(drinks:any){

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

    this.checkout = true;
    this.checkoutEvent.emit(this.checkout);
    this.customersEvent.emit(this.customers);
    
  }

  

}
