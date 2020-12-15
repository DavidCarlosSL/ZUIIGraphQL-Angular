import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IUser } from 'src/app/shared/models/user.interface';
import { SIGNUP_USER } from '../graphql/signup.mutations';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apollo: Apollo) { }

  public signUp(newUserData: IUser) {
      return this.apollo.mutate({
        mutation: SIGNUP_USER,
        variables: {
          data: {
            ...newUserData
          }
        }
      })
  }
}
