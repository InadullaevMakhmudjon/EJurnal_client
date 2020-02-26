import { gql } from 'apollo-boost';

const GET_EDITORS = gql`
  query GetEditors($userName: String){
    editors(userName: $userName) {
      id
      userName
      firstName
      secondName
    }
  }
`;

const POST_USERS = '';

export {
  GET_EDITORS,
  POST_USERS,
};
