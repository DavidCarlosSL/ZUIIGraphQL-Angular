import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { SIGNIN_USER } from '../graphql/signin.mutations';
import { IAuth } from '../models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private apollo: Apollo) { }

  public signIn(user_email: string, user_password: string){
    return this.apollo.mutate<IAuth>({
      mutation: SIGNIN_USER,
      variables: {
        user_email,
        user_password
      }
    })
  }
}
