import { notFound } from 'next/navigation';
import CollectionPage from '@/components/collections/CollectionPage';
import { collections } from '@/data/collections';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const collection = collections[slug];

  if (!collection) {
    notFound();
  }

  return <CollectionPage collection={collection} />;
}