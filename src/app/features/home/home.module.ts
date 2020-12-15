import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SigninModule } from '../signin/signin.module';
import { SignupModule } from '../signup/signup.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SigninModule,
    SignupModule,
    SharedModule
  ]
})
export class HomeModule { }
