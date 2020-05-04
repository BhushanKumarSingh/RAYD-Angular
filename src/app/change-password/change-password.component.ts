import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RaydService } from '../rayd.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private raydService:RaydService) { }
  changePasswordForm=new FormGroup({
    emailId:new FormControl(''),
    currentPassword:new FormControl(''),
    newPassword:new FormControl(''),
    confirmPassword:new FormControl('')
  })

  ngOnInit() {
  }
  change(){
    var data={'emailId':this.changePasswordForm.get('emailId').value,
    'currentPassword':this.changePasswordForm.get('currentPassword').value,
    'newPassword':this.changePasswordForm.get('newPassword').value}
    this.raydService.changePassword(data);
  }
  confirmPassword=false;
  confirm(){
    if(this.changePasswordForm.get('newPassword').value.length>0){
      if(this.changePasswordForm.get('newPassword').value==this.changePasswordForm.get('confirmPassword').value)
      this.confirmPassword=false;
      else
      this.confirmPassword=true;
    }

  }

}
