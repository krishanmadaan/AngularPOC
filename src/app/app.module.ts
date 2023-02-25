import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptumFinancialLogoComponent } from './optum-financial-logo/optum-financial-logo.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SwiperModule } from 'swiper/angular';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { BgImageComponent } from './bg-image/bg-image.component';
import { RouterModule, Routes } from '@angular/router';
import { InvalidURLComponent } from './invalid-url/invalid-url.component';
import { HomeComponent } from './home/home.component';
import { Flow1Component } from './flow1/flow1.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EnrollmentProcessQAComponent } from './enrollment-process-qa/enrollment-process-qa.component';
import { SliderComponent } from './slider/slider.component';
import { GeneralQA } from './Services/generalQA.service';
import { EnrollmentProcessQA } from './Services/enrollmentProcessQA.service';
import { PortalQaComponent } from './portal-qa/portal-qa.component';
import { PortalQA } from './Services/portalQA.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { PortalsComponent } from './portals/portals.component';


const appRoute: Routes= [
  {path: '', redirectTo: 'signup',pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'enrollmentProcess', component: EnrollmentComponent },
  {path: 'portals', component:PortalsComponent },
  {path: 'flow3', component: Flow1Component},
  {path: 'qa',component:QuestionAnswerComponent},
  {path: '**', component: InvalidURLComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    OptumFinancialLogoComponent,
    NavbarComponent,
    BgImageComponent,
    InvalidURLComponent,
    HomeComponent,
    Flow1Component,
    QuestionAnswerComponent,
    LoginComponent,
    SignupComponent,
    EnrollmentProcessQAComponent,
    SliderComponent,
    PortalQaComponent,
    EnrollmentComponent,
    PortalsComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    SlickCarouselModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [GeneralQA, EnrollmentProcessQA,PortalQA],
  bootstrap: [AppComponent]
})
export class AppModule { }
