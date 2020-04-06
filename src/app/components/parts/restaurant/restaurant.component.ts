import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  foodList: any[][] = [["Hamburgare",65], ["Vegodelux", 85], ["Pizza", 97], ["Padthai",65]];

  drinkList: any[][] = [["Zingo", 20], ["Pepsi", 25 ],["Cuba-Cola", 15], ["Juice", 10]];

  candyList: any[][] = [["Bilar", 20 ],["Hallon båtar ", 15 ], [" Popcorn XXL", 35 ],["Popcorn Medium", 15 ], ["Popcorn liten", 15 ]]

  constructor() { }

  ngOnInit(): void {
  }

  public buyFood(food:any){

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

    /*
    this.customers[this.seat].drinks.push(drinks[0]);
    this.customers[this.seat].sum = this.customers[this.seat].sum + drinks[1];
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers);
    */
  }

  public removeDrinks(drinks:any){

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
