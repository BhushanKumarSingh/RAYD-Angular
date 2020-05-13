import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from "@angular/forms";
import { RaydService } from "../rayd.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm = new FormGroup({
    locality:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    landmark:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    pinCode:new FormControl('',Validators.required),
    addressType:new FormControl('')

  })


  constructor(private raydService:RaydService) { }

  ngOnInit() {
  }
  saveData(){
    if(this.raydService.flagForCustomer==true){
      var address=this.addressForm.get('address').value+","+this.addressForm.get('landmark').value+", "+this.addressForm.get('city').value+", "+this.addressForm.get('state').value;
      this.raydService.signUpDetails.setCompleteAddress=address;
      this.raydService.signUpDetails.setAddressType=this.addressForm.get('addressType').value;
      this.raydService.signUpDetails.setCurrentLocation=this.addressForm.get('locality').value;
      this.raydService.signUpDetails.setPinCode=this.addressForm.get('pinCode').value;
      this.raydService.signUp();
    }
    else{
      var address=this.addressForm.get('address').value+","+this.addressForm.get('landmark').value+", "+this.addressForm.get('city').value+", "+this.addressForm.get('state').value;
      this.raydService.serviceProvider.setCompleteAddress=address;
      this.raydService.serviceProvider.setAddressType=this.addressForm.get('addressType').value;
      this.raydService.serviceProvider.setCurrentLocation=this.addressForm.get('locality').value;
      this.raydService.serviceProvider.setPinCode=this.addressForm.get('pinCode').value;
      this.raydService.signUpForServiceProvider();

    }
    

  }

}
