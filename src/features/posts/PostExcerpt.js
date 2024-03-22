import PostAuthor from './PostAuthor';
import React from 'react';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

function PostExcerpt({ post }) {
  const postBody = post?.body || '';
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{postBody.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`/post/${post.id}`} className="button muted-button">
          View Post
        </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <p className="postCredit">
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
}

export default PostExcerpt;
