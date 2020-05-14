import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { RaydService } from 'src/app/rayd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    starValue : number;
    srId : number = +sessionStorage.getItem("requestId");
    message : any;

  constructor(private toastr: ToastrService,private raydService:RaydService,private customerService : AppService,  private router:Router) { }

  ngOnInit() {
   
  }

  public radioChangeHandler(event : any) {
    this.starValue = event.target.value;

  }

  public sendFeedback(feedbackText) {
    let resp1 = this.customerService.sendFeedback(this.srId, this.starValue, feedbackText);
    resp1.subscribe ((data) => {
      this.message = data;
      this.toastr.success(this.message, 'Success');
      this.router.navigate(["userDashboard"])
      // this.router.navigateByUrl('');
    });
  }

  public clearForm() {
    this.ngOnInit();
  }

}
