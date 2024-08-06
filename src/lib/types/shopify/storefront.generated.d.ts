/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  first?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['Int']['input']>;
}>;


export type GetProductsQuery = { products: { edges: Array<(
      Pick<StorefrontTypes.ProductEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Product, 'title' | 'handle' | 'descriptionHtml'>
        & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url' | 'altText' | 'height' | 'width'>> }
      ) }
    )> } };

export type GetProductQueryVariables = StorefrontTypes.Exact<{
  handle?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type GetProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'handle' | 'title' | 'descriptionHtml'>
    & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url' | 'altText' | 'height' | 'width'>> }
  )> };

interface GeneratedQueryTypes {
  "#graphql\n    query GetProducts($first: Int) {\n      products(first: $first) {\n        edges {\n          cursor\n          node {\n            title\n            handle\n            descriptionHtml\n            featuredImage {\n              id\n              url\n              altText\n              height\n              width\n            }\n          }\n        }\n      }\n    }\n  ": {return: GetProductsQuery, variables: GetProductsQueryVariables},
  "#graphql\n    query GetProduct($handle: String) {\n      product(handle: $handle) {\n        id\n        handle\n        title\n        descriptionHtml\n        featuredImage {\n          id\n          url\n          altText\n          height\n          width\n        }\n      }\n    }\n  ": {return: GetProductQuery, variables: GetProductQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
