import SEO from '@/components/SEO';
import { GetStaticProps } from 'next';

interface Post {
    id: string;
    title: string;
  }

  interface PostsProps {
    posts: Post[];
  }
  
  export default function Posts({ posts }: PostsProps) {
    return (
      <div>
        <SEO title='Posts' />
        <h1>Listagem de Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
  
    return {
      props: {
        posts,
      },
      revalidate: 5,
    };
  };