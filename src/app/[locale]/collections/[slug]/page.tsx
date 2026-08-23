import { notFound } from 'next/navigation';
import CollectionPage from '@/components/collections/CollectionPage';
import { collections, isStateName } from '@/data/images';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CollectionSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  if (!isStateName(slug)) {
    notFound();
  }

  const collection = collections[slug];

  return <CollectionPage collection={collection} />;
}