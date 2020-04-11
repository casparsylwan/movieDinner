import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { movies } from '../../models/movies';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class MainfrontComponent implements OnInit {
  @Output() customersEvent = new EventEmitter();
  @Output() seatsTakenEvent = new EventEmitter();

   // Get screenSize
   screenSize:number;
   isMobile: boolean = false;
   width:number = window.innerWidth;
   height:number = window.innerHeight;
   mobileWidth:number  = 750;
 
   onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
}


  //Customer object 
  customers:Customer[] = new Array();


  //Movie info variables
  urlSafe: SafeResourceUrl;
  movieName:string="";
  movieDesc:string ="";
  movieInfo:movies = new movies();
  ticketprice:number;
  tickets: number = 1;
  showTmes:string[];
  movieDate:string =  "2020-04-25";
  time:string = "";

  //State booleans
  numberOfTicketChoosen:boolean = false;
  dateSetBoolean:boolean;
  seatsTakenBool:boolean = false;
  reload:boolean = false;

  //classes 
  wraper:string = "wraper";

  fronttext:string = "Boka din film, middag och godis idag!"
  orderText:string[] = ["Biljetter till ", "Kostar", "Hur många är ni?"];

  state:number = 0;

  showTrailer(i:number){
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl( this.movieInfo.movies[i].trailer);
    this.state = 1;
    this.movieName =  this.movieInfo.movies[i].name;
    this.ticketprice = this.movieInfo.movies[i].price;
    this.showTmes = this.movieInfo.movies[i].date;
    this.movieDesc = this.movieInfo.movies[i].desc;
    this.reload = !this.reload;
  }

  getNumberOfTickets(){
    
    this.numberOfTicketChoosen = true; 
    for(let i=0; i<this.tickets; i++){

      let customer:Customer = new Customer();
      customer.id = i;
      customer.movie = this.movieName;
      customer.date = this.movieDate + this.time;
      customer.orderList.push({name:this.movieName, price:this.ticketprice});
      customer.calcOrderSum()
      this.customers.push(customer);
    }
    this.customers.forEach(e => console.log(e.movie) );

  }

  setDateAndTime(i:number){

    console.log(i +" " + this.movieDate );
    this.time = " klockan: " + i;
    this.dateSetBoolean = true;

    

  }

  public stateChangeMainTop(){

    switch(this.state) { 
      case 1: { 
        if(this.width<750){

          return {
          'height' : '0rem'
          } 
        }else{
            this.wraper = "wraper one"
          return{
            
            'height' : '100%',
            'background-image': 'none',
            'background-color': '#000'
          }
        }
        
          
         break; 
      } 
      case 2: { 
         //statements; 
         break; 
      } 
      default: { 
        if(this.width<750){
         return {
          'height' : '15rem'
          } 
         }else{
           return{
            'height' : '30rem'
           }
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
