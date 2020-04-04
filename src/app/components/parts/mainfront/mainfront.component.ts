import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {

  fronttext:string = " Bio middag enjoy! "

  imges:string[][] = [["https://m.media-amazon.com/images/M/MV5BOGYyNWQ1MDItYzFjNC00NmVjLTlkZDQtNDg0YmI1YzAzYjVkXkEyXkFqcGdeQXVyMTMwOTMzNzU@._V1_.jpg", "Alfons Åberg"],
                     ["https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg","Avatar"],
                     ["https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", "Foret Gump"],
                     ["https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg","Harry Potter"],
                     ["https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg","Matrix"],
                     ["https://m.media-amazon.com/images/M/MV5BYWY2ZTcxY2QtOGNjMS00ZGI5LTliOTYtNDU3ZTcxMzVjYzU2XkEyXkFqcGdeQXVyNjA3NjE4OTc@._V1_.jpg","Zoo"]] 

  state:number = 0;

  public showTrailer(){
    if(this.state===1){
      console.log(this.state);
      this.state = 0;

    }else{
      console.log(this.state);
      this.state = 1;
    }
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

  constructor() { }

  ngOnInit(): void {
  }

}
