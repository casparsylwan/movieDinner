import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { movies } from '../../models/movies';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {
  @Output() customersEvent = new EventEmitter();
  @Output() seatsTakenEvent = new EventEmitter();


  //Customer object 
  customers:Customer[] = new Array();


  //Movie info variables
  urlSafe: SafeResourceUrl;
  movieName:string="";
  movieInfo:movies = new movies();
  ticketprice:number;
  tickets: number = 1;
  showTmes:string[];
  movieDate:string =  "2020-04-25";

  //State booleans
  numberOfTicketChoosen:boolean = false;
  dateSetBoolean:boolean;
  seatsTakenBool:boolean = false;

  fronttext:string = "Boka din film, middag och godis idag!"
  orderText:string[] = ["Biljetter till ", "Kostar", "Hur många är ni?"];

  state:number = 0;

  showTrailer(i:number){
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl( this.movieInfo.movies[i].trailer);
    this.state = 1;
    this.movieName =  this.movieInfo.movies[i].name;
    this.ticketprice = this.movieInfo.movies[i].price
    this.showTmes = this.movieInfo.movies[i].date
    
  }

  getNumberOfTickets(){
    
    this.numberOfTicketChoosen = true; 
    for(let i=0; i<this.tickets; i++){

      let customer:Customer = new Customer();
      customer.id = i;
      customer.movie = this.movieName;
      customer.date = this.movieDate;
      customer.orderList.push({name:this.movieName, price:this.ticketprice});
      customer.calcOrderSum()
      this.customers.push(customer);
    }
    this.customers.forEach(e => console.log(e.movie) );

  }

  setDateAndTime(i:number){
    console.log(i +" " + this.movieDate );
    this.dateSetBoolean = true;
  }

  public stateChangeMainTop(){

    switch(this.state) { 
      case 1: { 
        return {
          'height' : '0rem'
        } 
          
         break; 
      } 
      case 2: { 
         //statements; 
         break; 
      } 
      default: { 
         return {
          'height' : '15rem'
         } 
         break; 
      } 
   } 
  }

  public printer(){  
    this.customersEvent.emit(this.customers);
    
    setTimeout(()=>this.seatsTakenEvent.emit(this.seatsTakenBool), 700);
    console.log(this.seatsTakenBool)
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
