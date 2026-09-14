import DetailPage from '@/components/marketing/DetailPage';
import { findCatalogItem, industries } from '@/data/marketing';
import { pageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return industries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const item = findCatalogItem('industries', slug);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.summary, path: `/industries/${item.slug}` });
}
export default async function IndustryPage({ params }) {
  const { slug } = await params; const item = findCatalogItem('industries', slug);
  if (!item) notFound();
  return <DetailPage catalogType="industries" eyebrow="Industry" item={item} />;
}
