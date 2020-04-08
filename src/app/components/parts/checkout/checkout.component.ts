import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() customers:Customer[];

  totalSum:number;
  id:number = -1;
  

  constructor() { }

  ngOnInit(): void {
    this.calcTotalSum()
  }

  public customerList(id:number){
    this.id = id;
  }


  public calcTotalSum(){

    this.totalSum = 0;
    this.customers.forEach(customer => this.totalSum = this.totalSum + customer.totalSum) 

  }

  public pay(){
    
  }

}
