import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RaydService } from "../rayd.service";
import { LoginDetails } from "../login-details";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private raysService: RaydService, private appComponenet: AppComponent) { }

  login() {
    this.raysService.loginDetails.setEmailId = this.loginForm.get('emailId').value;
    this.raysService.loginDetails.setPassword = this.loginForm.get('password').value;

    this.raysService.login();
    // this.appComponenet.change();
  }

  ngOnInit() {
  }

}
