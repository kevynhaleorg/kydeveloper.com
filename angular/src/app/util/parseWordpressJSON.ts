import {Injectable} from '@angular/core'

import { Post } from '../classes/wordpress/post'
import { Term } from '../classes/wordpress/tag'
import { FeaturedMedia } from '../classes/wordpress/featuredMedia'
import { Author } from '../classes/wordpress/author'
import { Reply } from '../classes/wordpress/reply'

import * as moment from 'moment';

@Injectable()
export class ParseWordpressJSON {


	constructor() {
	}

	public convertPost(post: any) {

		let replies: Reply[],
			embed: any,
			author: Author,
			featuredmedia: FeaturedMedia,
			terms: Term[];

		embed = post._embedded
		author = this.convertAuthor(embed.author[0])

		featuredmedia = this.convertFeaturedMedia(embed['wp:featuredmedia'][0])
		terms = embed['wp:term'][1].map(term => this.convertTerm(term))

		if (embed.replies) {	
			replies = embed.replies.map(reply => this.convertReply(reply))
		}
		else {
			replies = []
		}
		console.log(replies)

		return {
			id: parseInt(post.id),
			date: this.convertGMT(post.date_gmt),
			modified: post.modifed_gmt,
			slug: post.slug,
			status: post.status,
			title: post.title.rendered,
			excerpt: post.excerpt.rendered,
			content: post.content.rendered,
			author: author,
			terms: terms,
			featuredmedia: featuredmedia,
			replies: replies
		}
	}

	convertFeaturedMedia(media: any) {
		return {
			id: parseInt(media.id),
			source_url: media.source_url,
			slug: media.slug,
			width: parseInt(media['media_details'].width),
			height: parseInt(media.media_details.height)
		}
	}

	convertAuthor(author: any) {
		return {
			id: parseInt(author.id),
			name: author.name,
			description: author.description,
			slug: author.slug,
			avatar: author.avatar_urls['96']
		}
	}

	convertTerm(term: any) {
		console.log('term', term)
		return {
			id: parseInt(term.id),
			name: term.name,
			slug: term.slug,
			taxonomy: term.taxonomy
			}
	}

	convertReply(reply: any) {
		return {
			authorid: "",
			authorname: "",
			authoravatar: "",
			authorurl: "",
			date: "",
			id: "",
			type: ""
		}
	}

	convertGMT(date: string) {
		console.log(date)
		return moment(date + " +0000", "YYYY-MM-DDTHH:mm:ss Z").format("MMM DD, YYYY")
	}
}