import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
          description
          ingredients
          image
          quantity
        }
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      price
      description           
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

