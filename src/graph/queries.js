import { gql } from '@apollo/client';


const USER_LOGIN = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;