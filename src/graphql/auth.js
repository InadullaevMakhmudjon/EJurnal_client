import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
    mutation SignIn($userName: String!, $password: String!) {
    signIn(data: {
        userName: $userName
        password: $password
    }){
        token,
        user {
        firstName
        secondName
        userName
        role {
            id
            name
        }
        }
    }
    }
`;

export const SIGN_UP = gql`
    mutation SignUp($data: InputUserType!){
        createUser(data: $data) {
            firstName
        }
    }
`;

export default '';
