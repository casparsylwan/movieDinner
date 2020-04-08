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

  public openMenu(){

    if(this.spinTheLines){
      this.spinTheLines = !this.spinTheLines;
      setTimeout(()=>this.closeMenu = !this.spinTheLines, 0);
      window.addEventListener('scroll', this.lockScroll, false);
    }else{
    //  this.closeMenu = !this.closeMenu;
      this.spinTheLines = !this.spinTheLines;
      window.removeEventListener('scroll', this.lockScroll , false);
    }  
  }

  public lockScroll(){
    window.scrollTo(0, 0);
 }
 
}
