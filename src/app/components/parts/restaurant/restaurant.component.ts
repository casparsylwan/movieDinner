import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() customers:Customer[];

  state:number=0;

  foodList: any[][] = [["Hamburgare",65], ["Vegodelux", 85], ["Pizza", 97], ["Padthai",65]];

  drinkList: any[][] = [["Zingo", 20], ["Pepsi", 25 ],["Cuba-Cola", 15], ["Juice", 10]];

  candyList: any[][] = [["Bilar", 20 ],["Hallon båtar ", 15 ], [" Popcorn XXL", 35 ],["Popcorn Medium", 15 ], ["Popcorn liten", 15 ]]

  resturantHeading:string = "Mat, dryck och godis"
  subHeading:string ="Beställ mat till stol:";

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

  
  public buyCandy(candy:any){

    console.log(candy[1]);
    /*
    this.customers[this.seat].candy.push(candy[0]);
    this.customers[this.seat].sum = candy[1] + this.customers[this.seat].sum; 
    this.customersEvent.emit(this.customers);
    */
  }

  public removeCandy(candy:any){

    console.log(candy[1]);
    /*
    let index = this.customers[this.seat].candy.indexOf(candy[0]);
    if(index != -1){
      this.customers[this.seat].candy.splice(index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - candy[1];
      this.customersEvent.emit(this.customers);
    }
    
    console.log(this.customers[this.seat]);
    */
  }


  public buyFood(food:any){

    console.log(food[1])

  /*  
    this.customers[this.seat].food.push(food[0]);
    this.customers[this.seat].sum = this.customers[this.seat].sum + food[1];
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers); 

    */
    
  }

  public removeFood(food:any){

    console.log(food);
/*
    let index = this.customers[this.seat].food.indexOf(food[0]);
    console.log(index);
    if(index !=-1){

      this.customers[this.seat].food.splice( index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - food[1];
      console.log(this.customers[this.seat]);
      this.customersEvent.emit(this.customers);
    }
    
    */
  }

  public buyDrinks(drinks:any){

    console.log(drinks[1])

    /*
    this.customers[this.seat].drinks.push(drinks[0]);
    this.customers[this.seat].sum = this.customers[this.seat].sum + drinks[1];
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers);
    */
  }

  public removeDrinks(drinks:any){

    console.log(drinks[1])

    /*
    let index = this.customers[this.seat].drinks.indexOf(drinks[0]);
    if(index != -1){
      this.customers[this.seat].drinks.splice(index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - drinks[1];
    }
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers);
    */
  }

  

}
