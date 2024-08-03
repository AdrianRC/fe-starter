import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { PUBLIC_SHOPIFY_TOKEN, PUBLIC_SHOPIFY_URL } from '$env/static/public';

const client = createStorefrontApiClient({
	storeDomain: PUBLIC_SHOPIFY_URL,
	apiVersion: '2024-07',
	publicAccessToken: PUBLIC_SHOPIFY_TOKEN
});

export default client;
