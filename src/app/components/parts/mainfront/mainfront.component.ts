import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { movies } from '../../models/movies'

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {
  urlSafe: SafeResourceUrl;
  movieInfo:movies = new movies();

  fronttext:string = "Beställ din film, middag och godis idag!"

  state:number = 0;

  showTrailer(i:number){
    
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl( this.movieInfo.movies[i].trailer);
    this.state = 1;
  }

  getNumberOfTickets(){
    console.log("Ska implenteras");
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
