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
  

  //Extended specification
  showBool:boolean = false; 
  showStr:string = "VISA"
  
  

  constructor() { }

  ngOnInit(): void {
    this.calcTotalSum()
  }

  public customerList(){
    if(this.showBool){
      this.showBool = !this.showBool;
      this.showStr = "Visa";
    }else{
      this.showStr = "DÖLJ";
      this.showBool = !this.showBool;
    }
    
    
  }


  public calcTotalSum(){

    this.totalSum = 0;
    this.customers.forEach(customer => this.totalSum = this.totalSum + customer.totalSum) 

  }

  public pay(){
    
  }

}
