import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() changeToSignInComponent = new EventEmitter();

  public emailInUse: boolean = false;

  constructor(private formBuilder: FormBuilder, private signUpService: SignupService) { }

  signUpForm = this.formBuilder.group({
    nameUser: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    emailUser: ['', [Validators.required, Validators.maxLength(100), Validators.minLength(6), Validators.email]],
    passwordUser: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
  })

  ngOnInit(): void {}

  signUpSubmit() {
    const newUserData = this.signUpForm.value;
    const { nameUser, emailUser, passwordUser } = newUserData;

    this.signUpService.signUp({name_user: nameUser, email_user: emailUser, password_user: passwordUser}).subscribe((response) => {
        this.changeToSignInComponent.emit();
    }, (error) => {
      if(error.graphQLErrors[0].extensions.emailInUse)
        this.emailInUse = true;
    })
  }

}
