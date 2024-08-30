import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache the data for 5 minutes
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when the window is refocused
    keepPreviousData: true, // Keep the previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;