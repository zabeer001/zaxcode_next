import AboutSection from '@/components/home/AboutSection';
import AdvantageSection from '@/components/home/AdvantageSection';
import ClientStrip from '@/components/home/ClientStrip';
import ContactSection from '@/components/home/ContactSection';
import ExperienceStrip from '@/components/home/ExperienceStrip';
import FaqSection from '@/components/home/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import MarqueeStrip from '@/components/home/MarqueeStrip';
import RecognitionSection from '@/components/home/RecognitionSection';
import RevealOnScroll from '@/components/home/RevealOnScroll';
import SelectedWorkSection from '@/components/home/SelectedWorkSection';
import ServicesSection from '@/components/home/ServicesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { pageMetadata, serializeJsonLd, siteUrl } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Web Development & SaaS Company in Bangladesh', description: 'Zaxcode designs and develops fast websites, SaaS platforms, custom ERP systems, and business automation for companies in Bangladesh and worldwide.', path: '/' });

const sections = [[ClientStrip, 'center'], [ExperienceStrip, 'center'], [RecognitionSection, 'center'], [ServicesSection, 'center'], [MarqueeStrip, 'from-left'], [SelectedWorkSection, 'from-right'], [AboutSection, 'center'], [StatsSection, 'from-left'], [TestimonialsSection, 'from-right'], [AdvantageSection, 'from-right'], [IndustriesSection, 'from-left'], [FaqSection, 'from-right'], [ContactSection, 'center']];

export default function Home() {
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Zaxcode', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/images/logo.png`, width: 349, height: 293 }, email: 'zabeer@zaxcode.com', areaServed: [{ '@type': 'Country', name: 'Bangladesh' }, 'Worldwide'], knowsAbout: ['Web development', 'SaaS development', 'ERP systems', 'UI/UX design', 'Business automation'] }, { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'Zaxcode', publisher: { '@id': `${siteUrl}/#organization` }, inLanguage: 'en' }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} /><HeroSection /><div className="relative z-20">{sections.map(([Component, variant], index) => <RevealOnScroll key={Component.name} variant={variant} delay={index * 70}><Component /></RevealOnScroll>)}</div></>;
}
