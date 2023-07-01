import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.NODE_ENV, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}