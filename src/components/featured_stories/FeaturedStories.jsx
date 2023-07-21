// imports
import React from 'react';

// styles
import "../featured_stories/featuredStories.css";
import CreatePostInput from '../create_post_input/CreatePostInput';
import Post from '../post/Post';

// components
export default function FeaturedStories() {
  return (
    <>
        <div className="stories__container">
            <CreatePostInput />
            <Post />
        </div>
    </>
  )
}
