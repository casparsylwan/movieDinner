import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfront',
  templateUrl: './mainfront.component.html',
  styleUrls: ['./mainfront.component.css']
})
export class MainfrontComponent implements OnInit {

  fronttext:string = " Bio middag enjoy! "

  constructor() { }

  ngOnInit(): void {
  }

}
