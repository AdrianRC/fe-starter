import { ApiType, shopifyApiProject } from '@shopify/api-codegen-preset';

export default {
	schema: 'https://shopify.dev/storefront-graphql-direct-proxy',
	documents: ['*.ts', '!node_modules'],
	projects: {
		default: shopifyApiProject({
			apiType: ApiType.Storefront,
			apiVersion: '2024-07',
			outputDir: './src/lib/types/shopify'
		})
	}
};
