import { Injectable } from '@angular/core';
import { SignUpDetails } from "./sign-up-details";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDetails } from "./login-details";
import { ServiceProvider } from "./service-provider";
import { Router } from '@angular/router';
import { AddProblem } from './add-problem';
import { VisitingDetails } from './visiting-details';
import { OrderDetails } from './order-details';

@Injectable({
  providedIn: 'root'
})
export class RaydService {

  constructor(private http: HttpClient,private router:Router) { 
    console.log(router.url) 
  }
  flagForCustomer = false;
  flagForServiceProvider = true;


  url = "http://localhost:8080/";
  signUpDetails = new SignUpDetails();





  signUp() {
    var URL = this.url+'signUp'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.signUpDetails.getEmailId + ':' + this.signUpDetails.getPassword) });
    this.http.post(URL, this.signUpDetails, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        alert("register")
        this.router.navigate(['loginpage']);
      },
      err => {
        alert("Something wrong with server please try later")

      }
    )
    this.flagForCustomer = false;
  }
  loginDetails = new LoginDetails();
  userData;

  customerLogin() {
    var URL = this.url+'signIn'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text' }).subscribe(
      (result) => {
        this.userData = JSON.parse(result); 
        alert("login")
        this.router.navigate(['userDashboard']);
        
      },
      err => {
        alert("Something wrong with password or username")
      }
    )
  }
  adminLogin(){
    var URL = this.url+'adminLogin'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text'}).subscribe(
      (result) => { 
        alert("login")
        
        this.router.navigate(['admin']);
      },
      err => {
        alert("Something wrong with password or username")
      }
    )

  }
  serviceData;
  serviceProviderLogin(){
    var URL = this.url+'serviceProviderLogin'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text' }).subscribe(
      (result) => {
        this.serviceData = JSON.parse(result); 
        alert("login")
        this.router.navigate(['serviceProvider']);
        
      },
      err => {
        alert("Something wrong with password or username")
      }
    )
    

  }
  serviceProvider=new ServiceProvider();
  signUpForServiceProvider(){
    var URL = this.url+'serviceProviderRequest'

  //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.serviceProvider.getEmailId + ':' + this.serviceProvider.getPassword) });
    this.http.post(URL, this.serviceProvider, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        alert("request registerd")
        this.router.navigate(['loginpage']);
      },
      err => {
        alert("Something wrong")

      }
    )
    
  }
  addressResult;
  async  getAddress(){
    var URL = this.url+'getAddress?userId='+this.userData.userId;
    // await this.http.get(this.url).subscribe(
    //   (result)=>{
    //     this.addressResult=result;
    //     console.log(this.addressResult)
    //   }
    // )
    this.addressResult=await this.http.get(URL).toPromise();
  }

  addProblem=new AddProblem();
  addProblemRequset(){
    var URL = this.url+'addProblem'

    //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.serviceProvider.getEmailId + ':' + this.serviceProvider.getPassword) });
      this.http.post(URL, this.addProblem, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          console.log(result)
          alert("request registerd")
        },
        err => {
          alert("Something wrong")
  
        }
      )
    
  }
  problemRequested;
  async  getRequest(){
    var URL = this.url+'getProblem?userId='+this.userData.userId;
    
    this.problemRequested=await this.http.get(URL).toPromise();
    console.log(this.problemRequested)
  }
  openRequest;
  async getOpenRequest(){
    var URL = this.url+'openRequest';
    this.openRequest=await this.http.get(URL).toPromise();
  }
  acceptRequest(requestData){
    var URL = this.url+'assignServiceProvider'

    //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.serviceProvider.getEmailId + ':' + this.serviceProvider.getPassword) });
      this.http.post(URL, requestData, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          console.log(result)
          alert("Accepted")
        },
        err => {
          alert("Already Accepted")
  
        }
      )
  }
  servicesProblem;
  async getAcctedService(){
    var URL = this.url+'getServices?serviceProviderId='+this.serviceData.serviceProviderId;
    this.servicesProblem= await this.http.get(URL).toPromise();
    console.log(this.servicesProblem);
  }
  visitingDetails=new VisitingDetails();
  async saveStatus(){
    var URL = this.url+'visitingDetails'

    //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.serviceProvider.getEmailId + ':' + this.serviceProvider.getPassword) });
      this.http.post(URL, this.visitingDetails, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          console.log(result)
          alert("Review added")
        },
        err => {
          alert("something worong")
  
        }
      )

  }
   orderDetails=new OrderDetails();
   async saveOrderDetails(){
    var URL = this.url+'orderDetails'
    //  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.serviceProvider.getEmailId + ':' + this.serviceProvider.getPassword) });
      this.http.post(URL, this.orderDetails, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          console.log(result)
          alert("Parts added")
        },
        err => {
          alert("something worong")
  
        }
      )
  }
  verifyServiceRequestDetails;
  async verifyServiceRequest(){
    var URL = this.url+'varify';
    this.verifyServiceRequestDetails=await this.http.get(URL).toPromise();

  }
 async sendLoginPassword(serviceProvider){
    var URL = this.url+'sendPassword'
      this.http.post(URL, serviceProvider, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          console.log(result)
          alert("password send")
        },
        err => {
          alert("something wrong")
  
        }
      )

  }
  vistingMessage;
  async getVistingDetails(){
    var URL = this.url+'review?userId='+this.userData.userId;
    this.vistingMessage=await this.http.get(URL).toPromise();
    console.log(this.vistingMessage)
  }
  requestType;
  async getrequestType(){
    var URL=this.url+'countType';
    this.requestType=await this.http.get(URL).toPromise();
    console.log(this.requestType[0]);
  }
  requestTypeOfAUser;
  async getrequestTypeOfUser(){
    var URL=this.url+'countTypeOfAUser?userId='+this.userData.userId;
    this.requestTypeOfAUser=await this.http.get(URL).toPromise();
  }
  paymentData;
  async getNotCompletedPayment(){
    var URL=this.url+'getPaymentStatus?userId='+this.userData.userId;
    this.paymentData=await this.http.get(URL).toPromise();
  }
  changePassword(data){
    var URL = this.url+'changePassword'
    this.http.post(URL, data, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        alert("password change succsessful")
        this.router.navigate(['customerLogin']);
      },
      err => {
        alert("something wrong")

      }
    )

  }
  allServiceProvider;
 async getAllServiceProvider(){
    var URL=this.url+'allServiceProvder';
    this.allServiceProvider=await this.http.get(URL).toPromise();
    console.log(this.allServiceProvider);

  }
  allCustomer;
  async getAllCustomer(){
    var URL=this.url+'allCustomer';
    this.allCustomer=await this.http.get(URL).toPromise();
    console.log(this.allCustomer);

  }
  invoiceDetails;
  async getInvoiceDetails(){
    var URL=this.url+'getInvoice?serviceRequestId=15';
    this.invoiceDetails=await this.http.get(URL).toPromise();
    console.log(this.invoiceDetails);
  }




}
