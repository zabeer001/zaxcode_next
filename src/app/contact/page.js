import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactPageHeader from '@/components/contact/ContactPageHeader';
import ContactSidebar from '@/components/contact/ContactSidebar';
import { pageMetadata, serializeJsonLd, siteUrl } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Contact Zaxcode', description: 'Talk with Zaxcode about your website, SaaS platform, ERP system, UI/UX, integration, or business automation project.', path: '/contact' });

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', url: `${siteUrl}/contact`, name: 'Contact Zaxcode', about: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Zaxcode', email: 'zabeer@zaxcode.com' }, inLanguage: 'en' };
  return <section className="mx-auto w-full max-w-7xl pb-20 pt-28"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} /><ContactPageHeader /><div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]"><ContactFormSection /><ContactSidebar /></div></section>;
}
