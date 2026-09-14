import CatalogPage from '@/components/marketing/CatalogPage';
import { industries } from '@/data/marketing';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Industries Zaxcode Supports', description: 'Practical websites, platforms, and business systems for startups, service teams, education, commerce, professional teams, and growing brands.', path: '/industries' });

export default function IndustriesPage() {
  return <CatalogPage catalogType="industries" eyebrow="Industries" title="Industries Zaxcode Supports" description={metadata.description} items={industries} />;
}
