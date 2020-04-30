import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from 'src/app/serviceprovider/serviceprovider.service';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-sp-technicians',
  templateUrl: './sp-technicians.component.html',
  styleUrls: ['./sp-technicians.component.css']
})
export class SpTechniciansComponent implements OnInit {
  spObj:any;
  serviceProviderTechie:any;
  constructor(private spService:ServiceproviderService,private raydService:RaydService) { }

  ngOnInit() {
    let response = this.spService.getTechnicianData(this.raydService.serviceData.serviceProviderId);
      response.subscribe((data)=>{
        this.spObj = data;
        console.log(this.spObj);
      });
  }
}
