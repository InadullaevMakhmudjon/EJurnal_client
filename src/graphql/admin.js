import { gql } from 'apollo-boost';

const CREATE_USER = gql`
    mutation CreateUser($data: InputUserType!) {
        createUser(data: $data) {
            firstName
            secondName
            role {
                name
            }
        }
    }
`;

const GET_USERS = gql`
    query getUsers($roleId: String!){
        users(roleId: $roleId) {
            id
            firstName
            secondName
            userName
            blocked
            createdAt
            lastEntered
            role{
                name
            }
        }
    }
`;

const GET_USER = gql`
    query getUser($where: WhereInputUserType!){
        user(where: $where) {
            id
            firstName
            secondName
            userName
            blocked
            createdAt
            lastEntered
            role{
                name
            }
        }
    }
`;

const DELETE_USER = gql`
    mutation DeleteUser($where: WhereInputUserType!) {
        deleteUser(where: $where) {
            firstName
        }
    }
`;

const BLOCK_USER = gql`
    mutation BlockUser($id: ID!, $blocked: Boolean!) {
        updateUser(data: {
            blocked: $blocked
        }, where: {
            id: $id
        }) {
            firstName
        }
    }
`;

export {
  CREATE_USER,
  GET_USERS,
  GET_USER,
  DELETE_USER,
  BLOCK_USER,
};
