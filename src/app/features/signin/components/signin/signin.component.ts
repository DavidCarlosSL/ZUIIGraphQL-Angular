import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public invalidCredentials: boolean = false;

  constructor(private formBuilder: FormBuilder, private signinService: SigninService, private router: Router) {}
  
  signInForm = this.formBuilder.group({
    emailUser: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(6), Validators.email]],
    passwordUser: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
  })

  ngOnInit(): void {}

  signInSubmit(){
    const userCredentials = this.signInForm.value;

    this.signinService.signIn(userCredentials.emailUser, userCredentials.passwordUser).subscribe((response) => {
      localStorage.setItem('userToken', response.data?.SignIn.token);
      this.invalidCredentials = false;
      this.router.navigateByUrl('/library')
    }, (error) => {
      if(error.graphQLErrors[0].extensions.authenticated == false)
        this.invalidCredentials = true;
    })
  }

}
