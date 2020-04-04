import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  //Classes
  line:string = "line";

  Heading:string = "Bio och Middag"
  

  spinTheLines:boolean = true;
  closeMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){

    
    if(this.spinTheLines){
      this.spinTheLines = !this.spinTheLines;
      console.log(this.spinTheLines)
      setTimeout(()=>this.closeMenu = !this.spinTheLines, 0);
    }else{
    //  this.closeMenu = !this.closeMenu;
      this.spinTheLines = !this.spinTheLines;
     // console.log(this.spinTheLines)
      setTimeout(()=>this.closeMenu = !this.spinTheLines, 700);
    }
    

  }
 
}
