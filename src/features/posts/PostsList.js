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
    content = <p>"Loading..."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    const preContent = orderedPosts.filter((val, i) => {
      if (i !== orderedPosts.length - 1) {
        return val.id !== orderedPosts[i + 1].id;
      }
      return val;
    });
    content = preContent.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
