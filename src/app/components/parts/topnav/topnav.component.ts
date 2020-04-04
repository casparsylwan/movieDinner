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
  closeMenu:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){

    this.spinTheLines = !this.spinTheLines;
    setTimeout(()=>this.closeMenu = this.spinTheLines, 500);

  }
 
}
