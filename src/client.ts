import { HoudiniClient } from '$houdini';
import { PUBLIC_DATOCMS_API_TOKEN } from '$env/static/public';

export default new HoudiniClient({
	url: 'https://graphql.datocms.com/',
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	fetchParams() {
		return {
			headers: {
				Authorization: `${PUBLIC_DATOCMS_API_TOKEN}`
			}
		};
	}
});
