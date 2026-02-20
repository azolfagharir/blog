import { gql } from "@apollo/client";


const GET_POSTS = gql`
query {
  posts {
    id
    title
    slug
    coverImage {
      id
      url
    }
    content{
      html
    }
    author {
      id
      name
      slug
      avatar{
        url
      }
      feild
      description{
        html
      }
    }

     comments {
      id
      name
      text
      email
    }
  }
}

`
export {GET_POSTS}