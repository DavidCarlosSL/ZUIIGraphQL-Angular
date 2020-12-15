import { gql } from "apollo-angular";

export const SIGNIN_USER = gql`
  mutation SignIn($user_email: String!, $user_password: String!) {
    SignIn(user_email: $user_email, user_password: $user_password) {
      token
      user {
        name_user
        createdAt
      }
    }
  }
`