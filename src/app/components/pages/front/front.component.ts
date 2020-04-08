import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  customers:Customer[];
  seatsTakenBool:boolean;
  checkout:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
