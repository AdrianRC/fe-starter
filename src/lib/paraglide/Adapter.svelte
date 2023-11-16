<script lang="ts">
	import { setLanguageTag, onSetLanguageTag, languageTag } from '../../paraglide/runtime';
	import { getContext, setContext } from 'svelte';
	import { page } from '$app/stores';

	setContext('languageTag', $page.params.lang);

	setLanguageTag(() => getContext('languageTag'));

	if (import.meta.env.SSR === false) {
		onSetLanguageTag((newLanguageTag) => {
			window.location.href = `/${newLanguageTag}/${window.location.pathname
				.split('/')
				.splice(2)
				.join('/')}`;
		});
	}
</script>

<slot />
