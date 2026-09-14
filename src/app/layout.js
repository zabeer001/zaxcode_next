import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import SiteFooter from '@/components/SiteFooter';
import SiteNavbar from '@/components/SiteNavbar';
import { defaultDescription, defaultSocialImage, siteName, siteUrl } from '@/lib/seo';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Zaxcode | Web Development & Digital Products', template: '%s | Zaxcode' },
  description: defaultDescription,
  applicationName: siteName,
  category: 'technology',
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: { siteName, locale: 'en_BD', type: 'website', title: 'Zaxcode | Web Development & Digital Products', description: defaultDescription, url: '/', images: [defaultSocialImage] },
  twitter: { card: 'summary_large_image', title: 'Zaxcode | Web Development & Digital Products', description: defaultDescription, images: [defaultSocialImage.url] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }) {
  return <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
    <body data-theme="zaxcode" className="overflow-x-hidden bg-base-100 text-base-content" suppressHydrationWarning>
      <SiteNavbar />
      <main className="relative mx-auto min-h-screen max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">{children}</main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SiteFooter /></div>
    </body>
  </html>;
}
