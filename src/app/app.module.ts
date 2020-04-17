import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { ServiceProvideSignupComponent } from './service-provide-signup/service-provide-signup.component';
import { HeaderComponent } from './header/header.component';
import { UserSignupComponent } from './customer-signup/user-signup.component';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from "@angular/router";
import { AddProblemComponent } from './add-problem/add-problem.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { MainContentComponent } from './service-provider/main-content/main-content.component';
import { ServiceProviderSideBarComponent } from './service-provider/service-provider-side-bar/service-provider-side-bar.component';
import { CustomerFeedbackComponent } from './service-provider/main-content/customer-feedback/customer-feedback.component';
import { IncomingRequestComponent } from './service-provider/main-content/incoming-request/incoming-request.component';
import { ServiceProviderServiceComponent } from './service-provider/main-content/service-provider-service/service-provider-service.component';
import { ServiceProviderDashboardComponent } from './service-provider/main-content/service-provider-dashboard/service-provider-dashboard.component';
import { ServiceProviderTechnicianComponent } from './service-provider/main-content/service-provider-technician/service-provider-technician.component';
import { ServiceProviderQueryComponent } from './service-provider/main-content/service-provider-query/service-provider-query.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserSignupComponent,
    ServiceProvideSignupComponent,
    HeaderComponent,
    AddressComponent,
    FooterComponent,
    UserDashboardComponent,
    AddProblemComponent,
    ServiceProviderComponent,
    MainContentComponent,
    ServiceProviderSideBarComponent,
    CustomerFeedbackComponent,
    IncomingRequestComponent,
    ServiceProviderServiceComponent,
    ServiceProviderDashboardComponent,
    ServiceProviderTechnicianComponent,
    ServiceProviderQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
