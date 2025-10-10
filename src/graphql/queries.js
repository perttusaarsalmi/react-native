import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          id
          name
          ownerName
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
              id
              name
              ownerName
              fullName
              reviewCount
              ratingAverage
              forksCount
              stargazersCount
              description
              language
              ownerAvatarUrl
              url
              reviews {
                    edges {
                      node {
                        id
                        text
                        rating
                        createdAt
                        user {
                          id
                          username
                        }
                      }
                    }
                  }
    }
  }
`;

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        id
        username
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      user {
        username
      }
      repositoryId
      rating
      createdAt
      text
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      username
      createdAt
      reviewCount
    }
  }
`;