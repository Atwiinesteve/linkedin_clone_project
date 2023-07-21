// imports
import React from "react";

// component imports
import CreatePostInput from "../create_post_input/CreatePostInput";
import Post from "../post/Post";

// styles
import "../featured_stories/featuredStories.css";

// data
import {posts} from "../../data/posts";

// components
export default function FeaturedStories() {
	return (
		<>
			<div className="stories__container">
				<CreatePostInput />
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</>
	);
}
