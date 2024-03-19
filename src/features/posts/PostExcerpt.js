import PostAuthor from './PostAuthor';
import React from 'react';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function PostExcerpt({ post }) {
  const postBody = post?.body || '';
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{postBody.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
      <p className="postCredit">
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
}

export default PostExcerpt;
