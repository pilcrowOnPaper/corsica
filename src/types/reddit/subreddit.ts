export interface RedditSubredditData {
	user_flair_background_color: string;
	submit_text_html: any;
	restrict_posting: boolean;
	user_is_banned: any;
	free_form_reports: boolean;
	wiki_enabled: boolean;
	user_is_muted: any;
	user_can_flair_in_sr: any;
	display_name: string;
	header_img: any;
	title: string;
	original_content_tag_enabled: boolean;
	allow_galleries: boolean;
	icon_size: any;
	primary_color: string;
	active_user_count: number;
	icon_img: string;
	display_name_prefixed: string;
	accounts_active: number;
	public_traffic: boolean;
	subscribers: number;
	user_flair_richtext: Record<string, string>[];
	videostream_links_count: number;
	name: string;
	quarantine: boolean;
	hide_ads: boolean;
	prediction_leaderboard_entry_type: string;
	emojis_enabled: boolean;
	advertiser_category: string;
	public_description: string;
	comment_score_hide_mins: number;
	allow_predictions: boolean;
	user_has_favorited: boolean | null;
	user_flair_template_id: any;
	community_icon: string;
	banner_background_image: string;
	header_title: any;
	community_reviewed: boolean;
	submit_text: string;
	description_html: any;
	spoilers_enabled: boolean;
	allow_talks: boolean;
	header_size: any;
	user_flair_position: string;
	all_original_content: boolean;
	has_menu_widget: boolean;
	is_enrolled_in_new_modmail: any;
	key_color: string;
	can_assign_user_flair: boolean;
	created: number;
	wls: number;
	show_media_preview: boolean;
	submission_type: string;
	user_is_subscriber: any;
	disable_contributor_requests: boolean;
	allow_videogifs: boolean;
	should_archive_posts: boolean;
	user_flair_type: string;
	allow_polls: boolean;
	collapse_deleted_comments: boolean;
	emojis_custom_size: any;
	public_description_html: string;
	allow_videos: boolean;
	is_crosspostable_subreddit: boolean;
	notification_level: any;
	can_assign_link_flair: boolean;
	accounts_active_is_fuzzed: boolean;
	allow_prediction_contributors: boolean;
	submit_text_label: any;
	link_flair_position: string;
	user_sr_flair_enabled: any;
	user_flair_enabled_in_sr: boolean;
	allow_chat_post_creation: boolean;
	allow_discovery: boolean;
	accept_followers: boolean;
	user_sr_theme_enabled: boolean;
	link_flair_enabled: boolean;
	subreddit_type: string;
	suggested_comment_sort: any;
	banner_img: string;
	user_flair_text: any;
	banner_background_color: string;
	show_media: boolean;
	id: string;
	user_is_moderator: any;
	over18: boolean;
	description: string;
	is_chat_post_feature_enabled: boolean;
	submit_link_label: any;
	user_flair_text_color: any;
	restrict_commenting: boolean;
	user_flair_css_class: any;
	allow_images: boolean;
	lang: string;
	whitelist_status: string;
	url: string;
	created_utc: number;
	banner_size: any;
	mobile_banner_image: string;
	user_is_contributor: any;
	allow_predictions_tournament: boolean;
}

export interface RedditSubreddit {
    kind: "string",
    data: RedditSubredditData
}