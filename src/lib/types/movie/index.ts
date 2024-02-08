import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset } from '@sanity/types';

export interface Movie {
	title: string;
	slug: string;
	releaseDate?: string;
	overview?: PortableTextBlock[];
	poster?: ImageAsset;
	castMembers: {
		characterName?: string;
		person?: {
			name?: string;
			image?: ImageAsset;
		};
	}[];
}

export interface MovieLink {
	title: string;
	slug: string;
}
