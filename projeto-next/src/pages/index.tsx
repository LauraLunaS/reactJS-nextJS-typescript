import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'dev-email-address': 'lauraluna.siqueira@hotmail.com',
  },
  })
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};