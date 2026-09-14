import CatalogPage from '@/components/marketing/CatalogPage';
import { services } from '@/data/marketing';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Explore Zaxcode Services', description: 'Web development, SaaS products, UI/UX design, automation, business systems, and custom ERP development.', path: '/services' });

export default function ServicesPage() {
  return <CatalogPage catalogType="services" eyebrow="Services" title="Explore Zaxcode Services" description={metadata.description} items={services} />;
}
