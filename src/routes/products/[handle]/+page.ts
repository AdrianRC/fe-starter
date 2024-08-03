import client from '$lib/shopify/client';
import { error } from '@sveltejs/kit';
import type { GetProductQuery } from '$lib/types/shopify/storefront.generated.js';

export async function load({ params }) {
	const productQuery = `#graphql
    query GetProduct($handle: String) {
      product(handle: $handle) {
        id
        handle
        title
        descriptionHtml
        featuredImage {
          id
          url
          altText
          height
          width
        }
      }
    }
  `;

	const { data } = await client.request<GetProductQuery>(productQuery, {
		variables: {
			handle: params.handle
		}
	});

	if (!data?.product) {
		error(404, {
			message: 'Not found'
		});
	}
	return { product: data.product };
}
