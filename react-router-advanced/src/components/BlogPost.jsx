
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Fetch and display the blog post content based on the id */}
    </div>
  );
};

export default BlogPost;
