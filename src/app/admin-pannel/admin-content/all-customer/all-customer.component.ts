import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {

  constructor(private raydService:RaydService) {
    
  }
  customer;
  async ngOnInit() {
   await this.raydService.getAllCustomer();
    this.customer=this.raydService.allCustomer;
    console.log(this.customer)
    
  }
  address;
  view=false;
  details(event){
    this.address=event;
    this.view=true;
  }
}
