import groq from 'groq';
import { error } from '@sveltejs/kit';
import { client } from '$lib/sanity/client';
import type { Movie } from '$lib/types/movie';
import type { EntryGenerator, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const movie: Movie = await client.fetch(
		groq`
    *[_type=='movie' && slug.current == $slug][0] {
      title,
      'slug': slug.current,
      releaseDate,
      overview,
      'poster': poster.asset->,
      castMembers[] {
        characterName,
        person->{
          name,
          'image': image.asset->
        }
      }
    }
  `,
		{
			slug: params.slug
		}
	);

	if (movie) {
		return { movie };
	}

	error(404, {
		message: 'Not found'
	});
};

export const entries: EntryGenerator = async () => {
	return await client.fetch(groq`
    *[_type=='movie' && defined(slug.current)] {
      'slug': slug.current
    }
  `);
};

export const prerender = true;
