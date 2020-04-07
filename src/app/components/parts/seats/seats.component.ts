import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  @Input() customers:Customer[];
  @Input() seatsTakenBool:Boolean;
  @Output() customersEvent = new EventEmitter();
  @Output() seatsTakenEvent = new EventEmitter();

  instruction:string =""

  numberOfSeats:number;
  
  seats:number[] = [];

  //Class variables
  wraper:string = "wraper";

  constructor() { }

  ngOnInit(): void {
    this.numberOfSeats = this.customers.length;
    if(this.numberOfSeats<2){

      this.instruction = "Välj din sittplats!";

    }else{

      this.instruction = "Välj era" + this.numberOfSeats + "sittplatser!";

    }
  }

  getSeats( i:number){
    
    if(this.seats.indexOf(i)===-1){
      this.seats.push(i);
    }else{
      this.seats.splice(this.seats.indexOf(i))
    }

    if(this.seats.length>=this.numberOfSeats){
      console.log("DONE")
      for(let i=0; i<this.numberOfSeats; i++)
      {
        this.customers[i].seat = this.seats[i];
      }
      this.customersEvent.emit(this.customers);
      this.seatsTakenBool = true;
      this.wraper = "wraper animated flipOut"
      setTimeout(()=>this.seatsTakenEvent.emit(this.seatsTakenBool), 700);
      //this.seatsTakenEvent.emit(this.seatsTakenBool);
    }
   

  }

}
