import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {

  fronttext:string = " Bio middag enjoy! "

  imges:string[] = ["/assets/sources/img/small/alfonsåberg.png",
                    "/assets/sources/img/small/avatar.png",
                    "/assets/sources/img/small/forestgump.png",
                    "/assets/sources/img/small/harrypotter.png",
                    "/assets/sources/img/small/matrix.png",
                    "/assets/sources/img/small/zoo.png"] 

  bgImage:string ="/assets/sources/img/small/alfonsåberg.png";
    
    /*
    C:\Users\Caspars Dator\Desktop\fullstack\moviedinner\movieDinner\src\app\sources\img\small\alfonsåberg.png
    'marginTop': !(spinTheLines) ? '16px' : '7px',
    'transform': !(spinTheLines) ? 'rotate(225deg)' : 'rotate(0deg)' }



    
    */
  constructor() { }

  ngOnInit(): void {
  }

}
