import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from "@angular/forms";
import { RaydService } from "../rayd.service";
@Component({
  selector: 'app-service-provide-signup',
  templateUrl: './service-provide-signup.component.html',
  styleUrls: ['./service-provide-signup.component.css']
})
export class ServiceProvideSignupComponent implements OnInit {
  serviceProviderForm=new FormGroup({
    serviceProviderName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    productType:new FormControl('',Validators.required),
    productName:new FormControl('',Validators.required)
  });

  constructor(private raydService:RaydService) { }
  set(){
    this.raydService.serviceProvider.setProductName=this.serviceProviderForm.get('productName').value;
    this.raydService.serviceProvider.setServiceProviderName=this.serviceProviderForm.get('serviceProviderName').value;
    this.raydService.serviceProvider.setProductType=this.serviceProviderForm.get('productType').value;
    this.raydService.serviceProvider.setEmailId=this.serviceProviderForm.get('email').value;
  }

  ngOnInit() {
  }

}
