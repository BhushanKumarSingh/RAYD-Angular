import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-all-service-provider',
  templateUrl: './all-service-provider.component.html',
  styleUrls: ['./all-service-provider.component.css']
})
export class AllServiceProviderComponent implements OnInit {

  constructor(private raydService:RaydService) { }
  allServiceProvider;
  view=false;
  async ngOnInit() {
    await this.raydService.getAllServiceProvider();
    this.allServiceProvider=this.raydService.allServiceProvider;
   
  }
  all;
  details(event){
    this.all=event;
    this.view=true;
  }

}
