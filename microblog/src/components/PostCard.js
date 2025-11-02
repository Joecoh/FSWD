import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p><b>By:</b> {post.author}</p>
    </div>
  );
};

export default PostCard;
