import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostStatus,
  getPostError,
  fetchPosts,
} from './postsSlice';
import React from 'react';
import { useEffect } from 'react';
import PostExcerpt from './PostExcerpt';
import { nanoid } from '@reduxjs/toolkit';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(
      (post, index) =>
        post && (
          <PostExcerpt
            key={post.id ? `${post.id}_${index}` : nanoid()}
            post={post}
          />
        )
    );
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
