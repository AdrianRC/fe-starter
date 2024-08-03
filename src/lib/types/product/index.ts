export interface Image {
	id: string;
	url: string;
	altText: string;
	height: number;
	width: number;
}

export interface Product {
	id: string;
	handle: string;
	title: string;
	descriptionHtml: string;
	featuredImage?: Image;
}

export interface ProductLink {
	title: string;
	handle: string;
}
