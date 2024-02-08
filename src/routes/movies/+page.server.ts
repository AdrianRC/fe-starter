import groq from 'groq';
import { error } from '@sveltejs/kit';
import { client } from '$lib/sanity/client';
import type { MovieLink } from '$lib/types/movie';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const movieLinks: MovieLink[] = await client.fetch(groq`
    *[_type=='movie' && defined(title) && defined(slug.current)] {
      title, 
      'slug': slug.current
    }
  `);

	if (movieLinks?.length) {
		return { movies: movieLinks };
	}

	error(404, {
		message: 'Not found'
	});
};
