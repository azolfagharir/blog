import { gql } from "@apollo/client";



export const CREATE_COMMENT = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $text: String!
    $postId: ID!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { id: $postId } }
      }
    ) {
      id
    }
  }
`;


export const PUBLISH_COMMENT = gql`
  mutation PublishComment($id: ID!) {
    publishComment(where: { id: $id }) {
      id
    }
  }
`;