import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { movies } from '../../models/movies'

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {

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
    console.log("Ska implenteras");
    this.numberOfTicketChoosen = true; 
  //  this.state = 0;
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

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}