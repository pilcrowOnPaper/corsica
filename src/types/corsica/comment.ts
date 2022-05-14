import type Submission from './submission';

export interface Comment extends Submission {
	data: CommentData;
}

export interface PostComment extends Submission {
	data: CommentData & {
		replies: {
			list: Comment[];
			more: string[];
		};
		depth: number;
		post_title: string;
	};
}

export interface UserComment extends Submission {
	data: CommentData & {
		post_title: string;
	};
}

interface CommentData {
	id: string;
	author: string;
	created: number;
	content: {
		text: string;
	};
	subreddit: string;
	score: number;
	vote: number;
	saved: boolean;
	parent_id: string | null;
	post_id: string | null;
}