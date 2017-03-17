import { Author } from './author'
import { Term } from './tag'
import { FeaturedMedia } from './featuredmedia'
import { Reply } from './reply'

export class Post {

	constructor() {
		this.featuredmedia = new FeaturedMedia();
	}
	id: number;
	date: string;
	modified: string;
	slug: string;
	status: string;
	title: string;
	excerpt: string;
	content: string;
	author: Author;
	terms: Term[];
	featuredmedia: FeaturedMedia;
	replies: Reply[];
}