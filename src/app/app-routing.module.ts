import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserSignupComponent } from './customer-signup/user-signup.component';
import { AddressComponent } from './address/address.component';
import { ServiceProvideSignupComponent } from "./service-provide-signup/service-provide-signup.component";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddProblemComponent } from './add-problem/add-problem.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { ServiceProviderDashboardComponent } from './service-provider/main-content/service-provider-dashboard/service-provider-dashboard.component';
import { ServiceProviderServiceComponent } from './service-provider/main-content/service-provider-service/service-provider-service.component';
import { ServiceProviderTechnicianComponent } from './service-provider/main-content/service-provider-technician/service-provider-technician.component';
import { IncomingRequestComponent } from './service-provider/main-content/incoming-request/incoming-request.component';
import { CustomerFeedbackComponent } from './service-provider/main-content/customer-feedback/customer-feedback.component';
import { ServiceProviderQueryComponent } from './service-provider/main-content/service-provider-query/service-provider-query.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { ServiceProviderRequestComponent } from './admin-pannel/admin-content/service-provider-request/service-provider-request.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "customerLogin", component: LoginpageComponent},
  {path: "customersignup", component: UserSignupComponent},
  {path: "addresspage", component: AddressComponent},
  {path: "serviceProviderSignUp",component:ServiceProvideSignupComponent},
  {path:"userDashboard",component:UserDashboardComponent},
  {path:"addProblem",component:AddProblemComponent},
  {path:"serviceProvider",component:ServiceProviderComponent,
  children:[
    {path:"dashboard",component:ServiceProviderDashboardComponent},
    {path:"services",component:ServiceProviderServiceComponent},
    {path:"technicians",component:ServiceProviderTechnicianComponent},
    {path:"requests", component:IncomingRequestComponent},
    {path:"feedback",component:CustomerFeedbackComponent},
    {path:"myquery",component:ServiceProviderQueryComponent},
  ]},
  {path:"admin",component:AdminPannelComponent,
  children:[
    {path:"serviceProviderRequest",component:ServiceProviderRequestComponent}
  ]
},
{path:"home",component:HomeComponent},
{path:"",component:HomeComponent},
{path:"adminLogin",component:LoginpageComponent},
{path:"ServiceProviderLogin",component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
