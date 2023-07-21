// imports
import React from 'react';

// styles
import "../featured_stories/featuredStories.css";
import CreatePostInput from '../create_post_input/CreatePostInput';

// components
export default function FeaturedStories() {
  return (
    <>
        <div className="stories__container">
            <CreatePostInput />
        </div>
    </>
  )
}
