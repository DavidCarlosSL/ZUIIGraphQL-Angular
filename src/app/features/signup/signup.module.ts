import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './components/signup/signup.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
