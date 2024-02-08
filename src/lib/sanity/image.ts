import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import type { Image } from '@sanity/types';

const builder = imageUrlBuilder(client);

export function imageBuilder(source: Image) {
	return builder.image(source);
}
