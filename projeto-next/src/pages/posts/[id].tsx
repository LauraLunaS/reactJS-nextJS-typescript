import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Comment {
    id: string;
    body: string;
  }
  
  interface CommentsProps {
    comments: Comment[];
  }
  
  interface Post {
    id: string;
    title: string;
  }
  
  interface PostsProps {
    posts: Post[];
  }

  export default function Post({ comments }: CommentsProps) {
    const router = useRouter();

    if (router.isFallback) {
      return <p>Loading...</p>;
    }
  
    return (
      <>
        <h1>Post {router.query.id}</h1>
        <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    
  
    return {
      paths: [],
      fallback: true,
    };
  };
  
  export const getStaticProps: GetStaticProps<CommentsProps> = async context => {
    const  id = context.params?.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?postId=${id}`);
    const comments = await response.json();
  
    return {
      props: {
        comments,
      },
      revalidate: 5, // In seconds
    };
  };