import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import SEO from '../../components/SEO';
import styles from './post.module.scss';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';

export default function Post() {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="Post" />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Titulo</h1>
          <time>Data</time>
          <div className={styles.content}>Conteudo</div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {},
    revalidate: 60 * 60 * 12, // 12 horas
  };
};