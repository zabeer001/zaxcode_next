import DetailPage from '@/components/marketing/DetailPage';
import { findCatalogItem, services } from '@/data/marketing';
import { pageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const item = findCatalogItem('services', slug);
  if (!item) return {};
  return pageMetadata({ title: item.title, description: item.summary, path: `/services/${item.slug}` });
}
export default async function ServicePage({ params }) {
  const { slug } = await params; const item = findCatalogItem('services', slug);
  if (!item) notFound();
  return <DetailPage catalogType="services" eyebrow="Service" item={item} />;
}
