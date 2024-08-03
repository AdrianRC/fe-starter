import client from '$lib/shopify/client';
import type { GetProductsQuery } from '$lib/types/shopify/storefront.generated';

export async function load() {
	const productsQuery = `#graphql
    query GetProducts($first: Int) {
      products(first: $first) {
        edges {
          cursor
          node {
            title
            handle
          }
        }
      }
    }
  `;

	const { data, errors, extensions } = await client.request<GetProductsQuery>(productsQuery, {
		variables: {
			first: 25
		}
	});

	const products = data?.products.edges.map((edge) => {
		return {
			title: edge.node.title,
			handle: edge.node.handle
		};
	});

	return { products };
}
