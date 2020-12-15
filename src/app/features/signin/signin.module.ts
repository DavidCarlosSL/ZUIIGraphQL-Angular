import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SigninComponent]
})
export class SigninModule { }
